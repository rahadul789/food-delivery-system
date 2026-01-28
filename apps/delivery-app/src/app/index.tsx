import { Text, View } from "react-native";
import ActiveDeliveryScreen from "../screens/orders/ActiveDeliveryScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen....</Text>
      <ActiveDeliveryScreen />
    </View>
  );
}
