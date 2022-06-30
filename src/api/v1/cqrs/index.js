import { ContainerBuilder, EventStore } from "node-cqrs";
import TutorAggregate from "./domain/TutorAggregate";
import MongoEventStorage from "./MongoEventStorage/MongoEventStorage";
import TutorProjection from "./projection/TutorProjection";
import tutorProfileReadModelRepository from "./repository/tutorProfileReadModel.repository";

const builder = new ContainerBuilder();
builder.registerInstance(
  {
    connectionString: process.env.MONGODB_URI,
  },
  "mongoConfig",
);
builder.register(MongoEventStorage, "storage");
builder.register(EventStore, "eventStore");
// builder.registerAggregate(UserAggregate);
// builder.registerProjection(UserProjection, "user");
builder.registerAggregate(TutorAggregate);
builder.registerInstance(
  tutorProfileReadModelRepository,
  "tutorProfileReadModelRepository",
);
builder.registerProjection(TutorProjection, "tutor");

const container = builder.container();
container.tutor;

export default container;
