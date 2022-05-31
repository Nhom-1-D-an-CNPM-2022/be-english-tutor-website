import messageServices from '../services';

const chatWithOther = async (req, res) => {
  const { user } = req;
  const { otherUserId } = req.params;
  const { content } = req.body;

  try {
    const message = messageServices.create({
      from: user._id,
      to: otherUserId,
      content,
    });

    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default chatWithOther;
