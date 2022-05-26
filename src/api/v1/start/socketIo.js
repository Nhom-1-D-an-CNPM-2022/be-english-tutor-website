import {Server} from 'socket.io';

const list = [];
const listUser = [];
const startSocket = (server) =>{
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
  
    list.push({id: socket.id});
  
    socket.on('disconnect', ()=>{
      let i = 0;
      while (i<list.length){
        let s = list[i];
        if (s.id == socket.id)
          list.splice(list.indexOf(s), 1);
        else
          i++;
      }
      i=0;
      while (i<listUser.length){
        let s = listUser[i];
        if (s.socketID == socket.id) {
          listUser.splice(list.indexOf(s), 1);
          if(s.user.type == "tutor") {
            io.sockets.emit("removeOnlineTutor", s.user._id);
          }
        }
        else
          i++;
      }
    })
  
    socket.on('online', (user)=>{
      socket.emit('online', list);
      let x = true;
      for (let t of listUser)
        if (t.socketID === socket.id)
          x = false;
      if (x){
        listUser.push({socketID: socket.id, user: user});

        //Send user info to all client if user is tutor
        if(user !==null && user.type == "tutor") {
          io.sockets.emit("receiveNewOnlineTutor", user);
        }
      }
    });

    socket.on('getOnlineTutors', () => {
      console.log(listUser);
      const listTutor = listUser.filter(item => {
        return item.user && item.user.type === "tutor";
      });
      io.to(socket.id).emit("receiveOnlineTutors", listTutor);
    })
  
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

    socket.on('notification', ({teacher, student, course, notification}) =>{
      let idSocket = null;
      for (let t in listUser)
        if (t.user && student._id === t.user._id)
          idSocket = t.socketID;
      if (idSocket)
        io.to(idSocket).emit('notification', {teacher, course, notification});
    })
  });
}

export default startSocket;