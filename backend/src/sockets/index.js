// socket initialization
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const trackingSocket = require("./tracking.socket");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // later restrict this
    },
  });

  // 🔐 Socket authentication middleware
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;

      if (!token) {
        return next(new Error("Authentication token missing"));
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET);

      socket.user = payload; // attach user info
      next();
    } catch (err) {
      next(new Error("Authentication failed"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`🔌 Socket connected: ${socket.id} | User: ${socket.user.id}`);

    trackingSocket(io, socket);

    socket.on("disconnect", () => {
      console.log(`❌ Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
};

module.exports = {
  initSocket,
  getIO,
};
