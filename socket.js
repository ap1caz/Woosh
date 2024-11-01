const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("sendMessage", ({ message, toUser }) => {
    // Send the message to the specific user
    socket.to(toUser).emit("receiveMessage", { message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
