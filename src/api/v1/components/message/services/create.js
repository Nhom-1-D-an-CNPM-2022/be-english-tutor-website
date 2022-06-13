import Message from '../model';

const create = ({ from, to, content }) => {
  const newMessage = new Message({
    from,
    to,
    content,
  });
  newMessage.save();
  return newMessage;
};

export default create;
