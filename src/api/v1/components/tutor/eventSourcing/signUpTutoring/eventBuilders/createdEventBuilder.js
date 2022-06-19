import eventBuilder from "./eventBuilder";

const createdEventBuilder = async (userId, metadata) => {
  await eventBuilder(userId, "CREATED", metadata);
};

export default createdEventBuilder;
