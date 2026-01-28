import { Text, View } from "react-native";
import TrackOrderScreen from "../screens/order/TrackOrderScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen11.</Text>
      <TrackOrderScreen />
    </View>
  );
}
