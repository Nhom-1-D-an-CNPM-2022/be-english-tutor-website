import messageServices from '../services';

const getWithOtherUser = async (req, res) => {
  const { user } = req;
  const { otherUserId } = req.params;
  try {
    const messages = await messageServices.getConversation(
      user._id,
      otherUserId
    );

    res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getWithOtherUser;
