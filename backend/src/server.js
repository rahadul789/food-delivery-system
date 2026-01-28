const http = require("http");
const app = require("./app");
const { PORT } = require("./config/env");
const { initSocket } = require("./sockets");

const server = http.createServer(app);

// 🔌 INIT SOCKET.IO
initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
