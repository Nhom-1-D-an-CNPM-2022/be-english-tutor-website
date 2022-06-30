class AbstractMessage {
  type;
  payload;
  context;
  aggregateId;
  aggregateVersion;
  sagaId;
  sagaVersion;

  constructor({
    type,
    payload,
    context,
    aggregateId,
    aggregateVersion,
    sagaId,
    sagaVersion,
  }) {
    this.type = type;
    this.payload = payload;
    this.context = context;
    this.aggregateId = aggregateId;
    this.aggregateVersion = aggregateVersion;
    this.sagaId = sagaId;
    this.sagaVersion = sagaVersion;
  }
}

export default AbstractMessage;
