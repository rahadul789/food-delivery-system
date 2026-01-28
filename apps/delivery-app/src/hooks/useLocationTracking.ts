import * as Location from "expo-location";
import { getSocket } from "../services/socket";

export const startLocationTracking = async (orderId: string) => {
  const socket = getSocket();

  // Join order room
  socket.emit("joinOrderRoom", { orderId });

  // Request permission
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("❌ Location permission denied");
    return null;
  }

  // Start watching position
  const subscription = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 3000, // ms
      distanceInterval: 10, // meters
    },
    (position) => {
      const { latitude, longitude } = position.coords;

      console.log("📍 Sending location:", latitude, longitude);

      socket.emit("locationUpdate", {
        orderId,
        lat: latitude,
        lng: longitude,
      });
    },
  );

  return subscription; // IMPORTANT: return subscription, not watchId
};

export const stopLocationTracking = async (
  subscription: Location.LocationSubscription | null,
) => {
  if (subscription) {
    subscription.remove();
    console.log("🛑 Location tracking stopped");
  }
};
