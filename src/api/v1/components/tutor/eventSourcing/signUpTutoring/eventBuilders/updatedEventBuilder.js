import eventBuilder from "./eventBuilder";

const updatedEventBuilder = async (userId, metadata) => {
  await eventBuilder(userId, "UPDATED", metadata);
};

export default updatedEventBuilder;
