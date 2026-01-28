import React, { useEffect } from "react";
import { View, Text } from "react-native";
import LiveMap from "../../components/Map/LiveMap";
import { connectSocket } from "@/src/services/socket";
import { useLiveTracking } from "@/src/hooks/useLiveTracking";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzhiYjlmZmJmOTYyMDM0Nzc4MGM5OSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc2OTU5NzMzMSwiZXhwIjoxNzY5NjgzNzMxfQ.T-2OV2RR0AB66u9MPJ2Bd6sMzPFz5O-6s3DK23ZKW74";
const ORDER_ID = "ORDER123";

export default function TrackOrderScreen() {
  useEffect(() => {
    connectSocket(TOKEN);
  }, []);

  const location = useLiveTracking(ORDER_ID);
  console.log(location);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 10 }}>📦 Tracking Order {ORDER_ID}</Text>
      <LiveMap location={location} />
      <Text>End</Text>
    </View>
  );
}
