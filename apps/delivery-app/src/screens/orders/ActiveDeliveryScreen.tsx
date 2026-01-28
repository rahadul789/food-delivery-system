import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { connectSocket } from "../../services/socket";
import {
  startLocationTracking,
  stopLocationTracking,
} from "../../hooks/useLocationTracking";
import * as Location from "expo-location";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzhiYjg1ZmJmOTYyMDM0Nzc4MGM5NyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc2OTUzMjgyMywiZXhwIjoxNzY5NjE5MjIzfQ.vJdjtd_3YGWog3Jdd2rwDYIzWrjCPcppDNuSmLU1oKM";
const ORDER_ID = "ORDER123";

export default function ActiveDeliveryScreen() {
  const locationSubscription = useRef<Location.LocationSubscription | null>(
    null,
  );

  useEffect(() => {
    connectSocket(TOKEN);

    const startTracking = async () => {
      locationSubscription.current = await startLocationTracking(ORDER_ID);
    };

    startTracking();

    return () => {
      stopLocationTracking(locationSubscription.current);
    };
  }, []);

  return (
    <View>
      <Text>🚴 Delivering Order {ORDER_ID}</Text>
    </View>
  );
}
