import SignUpTutoringLog from "../signUpTutoringLog.model";

const eventBuilder = async (userId, eventType, metadata) => {
  const newLogRecord = new SignUpTutoringLog({
    userId,
    eventType,
    metadata,
  });

  await newLogRecord.save();
};

export default eventBuilder;
