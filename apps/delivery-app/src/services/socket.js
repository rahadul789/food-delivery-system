import { io } from "socket.io-client";

let socket;

export const connectSocket = (token) => {
  socket = io("http://192.168.1.11:4000", {
    transports: ["websocket"],
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("✅ Socket connected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log("❌ Socket error:", err.message);
  });

  return socket;
};

export const getSocket = () => socket;
