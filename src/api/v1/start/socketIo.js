import {Server} from 'socket.io';
import { createServer } from "http";

  const list = [];
const startSocket = (app) =>{
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
  
    list.push({id: socket.id});
  
    socket.on('disconnect', ()=>{
      for (let s of list)
      if (s.id == socket.id)
        list.splice(list.indexOf(s), 1);
    })
  
    socket.on('online', ()=>{socket.emit('online', list)});
  
    socket.on("callToUser", ({ from, to }) => {
      io.to(to).emit("callToUser", {
        from
      });
    });
  
    socket.on('decline', ({to})=>{
      io.to(to).emit('callFail');
    })
  
  
    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
      io.to(userToCall).emit("callUser", {
        signal: signalData,
        from,
        name,
      });
    });
  
    socket.on("iCallUser", ({ userToCall, signalData, from, name }) => {
      io.to(userToCall).emit("iCallUser", {
        signal: signalData,
      });
    });
  
    socket.on("updateVideo", ({from, to, vid, mic})=>{
      io.to(to).emit('updateVideo', {from, vid, mic});
    })
  
    socket.on('callFail', ({from})=>{
      io.to(from).emit('callFail');
    })
  
    socket.on('leaveCall', ({from, to})=>{
      io.to(to).emit('endCall');
      io.to(from).emit('endCall');
    })
  
    socket.on("updateMyMedia", ({ type, currentMediaStatus }) => {
      console.log("updateMyMedia");
      socket.broadcast.emit("updateUserMedia", { type, currentMediaStatus });
    });
  
    socket.on("msgUser", ({ name, to, msg, sender }) => {
      io.to(to).emit("msgRcv", { name, msg, sender });
    });
  
    socket.on("answerCall", (data) => {
      socket.broadcast.emit("updateUserMedia", {
        type: data.type,
        currentMediaStatus: data.myMediaStatus,
      });
      io.to(data.to).emit("callAccepted", data);
    });
    socket.on("endCall", ({ id }) => {
      io.to(id).emit("endCall");
    });
  });
}

export default startSocket;