import { View, Text } from "react-native";
import React from "react";
import { io } from "socket.io-client";

const Sock = () => {
  const socket = io("http://localhost:4000", {
    auth: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzhiYjg1ZmJmOTYyMDM0Nzc4MGM5NyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc2OTU2NzA0NywiZXhwIjoxNzY5NjUzNDQ3fQ.CPzn3uy2A4nO7FHT3U_wR7CVRWl_-cHpyG2GATNThkA",
    },
  });

  socket.on("connect", () => {
    console.log("✅ Connected:", socket.id);
  });

  socket.emit("joinOrderRoom", { orderId: "ORDER123" });

  socket.on("liveLocation", (data) => {
    console.log("📍 Location:", data);
  });

  socket.on("connect_error", (err) => {
    console.log("❌ Error--:", err.message);
  });
  return (
    <View>
      <Text>Sock</Text>
    </View>
  );
};

export default Sock;
