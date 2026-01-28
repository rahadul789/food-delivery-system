import { useEffect, useState } from "react";
import { getSocket } from "../services/socket";

export const useLiveTracking = (orderId: string) => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const socket = getSocket();

    if (!socket) {
      console.log("❌ Socket not initialized");
      return;
    }

    socket.emit("joinOrderRoom", { orderId });

    socket.on("liveLocation", (data) => {
      console.log("📍 Received location:", data);
      setLocation({
        latitude: data.lat,
        longitude: data.lng,
      });
    });

    return () => {
      socket.emit("leaveOrderRoom", { orderId });
      socket.off("liveLocation");
    };
  }, [orderId]);

  return location;
};
