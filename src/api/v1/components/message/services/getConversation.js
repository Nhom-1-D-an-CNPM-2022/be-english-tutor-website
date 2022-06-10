import Message from '../model';

const getConversation = async (userId1, userId2) => {
  const conversation = await Message.find({
    $or: [
      {
        from: userId1,
        to: userId2,
      },
      {
        to: userId1,
        from: userId2,
      },
    ],
  });

  return conversation;
};

export default getConversation;
