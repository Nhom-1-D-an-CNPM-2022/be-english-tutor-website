import mongoose from "mongoose";
import co from "co";
import ConcurrencyError from "./ConcurrencyError";
import reconnect from "./reconnect";
import TutorProfileWriteModel from "../infrastructure/tutorProfileWriteModel.schema";

const _collection = Symbol("collection");

function wrapObjectId(obj, key) {
  if (!obj) throw new TypeError("obj argument required");
  if (!key) throw new TypeError("key argument required");
  if (typeof obj[key] === "string" && obj[key].length === 24) {
    obj = { ...obj, [key]: new mongoose.Types.ObjectId(obj[key]) };
  }
}

function wrapBinary(obj, key) {
  if (!obj) throw new TypeError("obj argument required");
  if (!key) throw new TypeError("key argument required");
  if (typeof obj[key] === "string") {
    obj = { ...obj, [key]: Buffer.from(obj[key], "hex") };
  }
}

function wrapEvent(evt) {
  if (evt) {
    wrapObjectId(evt, "_id");
    wrapObjectId(evt, "aggregateId");
    wrapObjectId(evt, "sagaId");
    if (evt.context) {
      wrapObjectId(evt.context, "sagaId");
      wrapObjectId(evt.context, "uid");
    }
    wrapBinary(evt, "sig");
    wrapBinary(evt, "hash");
  }
}

function* connect({ connectionString }) {
  if (typeof connectionString !== "string" || !connectionString.length)
    throw new TypeError("connectionString argument must be a non-empty String");

  yield mongoose.connect(connectionString);

  const collection = yield TutorProfileWriteModel.createCollection();

  return collection;
}

class MongoEventStorage {
  get collection() {
    return this[_collection];
  }

  constructor({ mongoConfig }) {
    if (!mongoConfig) throw new TypeError("mongoConfig argument required");
    if (
      typeof mongoConfig.connectionString !== "string" ||
      !mongoConfig.connectionString.length
    )
      throw new TypeError(
        "mongoConfig.connectionString argument must be a non-empty String",
      );

    const connectionString = mongoConfig.connectionString;
    const connectMethod = co.wrap(connect);

    Object.defineProperty(this, _collection, {
      value: reconnect(() => connectMethod({ connectionString })),
    });
  }

  getNewId() {
    // eslint-disable-line class-methods-use-this
    return new mongoose.Types.ObjectId().toString();
  }

  getAggregateEvents(aggregateId, options) {
    if (!aggregateId) throw new TypeError("aggregateId argument required");
    if (typeof aggregateId === "string")
      aggregateId = new mongoose.Types.ObjectId(aggregateId);

    const q = { aggregateId };

    if (options && options.after) {
      (q.aggregateVersion || (q.aggregateVersion = {})).$gt = options.after;
    }

    if (options && options.before) {
      (q.aggregateVersion || (q.aggregateVersion = {})).$lt = options.before;
    }

    return this._findEvents(q, { sort: "aggregateVersion" });
  }

  getSagaEvents(sagaId, options) {
    if (!sagaId) throw new TypeError("sagaId argument required");
    if (typeof sagaId === "string")
      sagaId = new mongoose.Types.ObjectId(sagaId);

    const q = { sagaId };

    if (options && options.after) {
      (q.sagaVersion || (q.sagaVersion = {})).$gt = options.after;
    }

    if (options && options.before) {
      (q.sagaVersion || (q.sagaVersion = {})).$lt = options.before;
    }

    if (options && options.except) {
      q._id = { $ne: mongoose.Types.ObjectId(options.except) };
    }

    return this._findEvents(q, { sort: "sagaVersion" });
  }

  getEvents(eventTypes) {
    if (!Array.isArray(eventTypes))
      throw new TypeError("eventTypes argument must be an Array");

    return this._findEvents({ type: { $in: eventTypes } });
  }

  _findEvents(findStatement, options) {
    if (!findStatement) throw new TypeError("findStatement argument required");

    return this.collection.then(collection =>
      collection.find(findStatement, options).toArray(),
    );
  }

  commitEvents(events) {
    if (!events) throw new TypeError("events argument required");
    if (!Array.isArray(events))
      throw new TypeError("events argument must be an Array");

    events.forEach(wrapEvent);

    events = events.map(eventObj => ({ ...eventObj }));

    return this.collection
      .then(collection => collection.insertMany(events, { w: 1 }))
      .then(
        () => {
          events.forEach(e => {
            e.id = e._id;
            delete e._id;
          });

          return events;
        },
        err => {
          if (err.code === 11000) {
            throw new ConcurrencyError("event is not unique");
          } else {
            console.error(
              "commit operation has failed: %s",
              (err && err.message) || err,
            );

            throw err;
          }
        },
      );
  }
}

export default MongoEventStorage;
