const EVENTS = require("../constants/socketEvents");

module.exports = (io, socket) => {
  // Join order room
  socket.on(EVENTS.JOIN_ORDER_ROOM, ({ orderId }) => {
    socket.join(`order_${orderId}`);
    console.log(`👥 User ${socket.user.id} joined order_${orderId}`);
  });

  // Leave order room
  socket.on(EVENTS.LEAVE_ORDER_ROOM, ({ orderId }) => {
    socket.leave(`order_${orderId}`);
  });

  // Receive location from delivery man
  socket.on(EVENTS.LOCATION_UPDATE, ({ orderId, lat, lng }) => {
    // 🔒 Basic validation
    if (!orderId || !lat || !lng) return;

    // Broadcast to customer(s)
    io.to(`order_${orderId}`).emit(EVENTS.LIVE_LOCATION, {
      lat,
      lng,
      timestamp: Date.now(),
    });
  });
};
