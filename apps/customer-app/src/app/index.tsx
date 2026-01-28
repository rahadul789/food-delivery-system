import { Text, View } from "react-native";
import Test from "../components/Test";
import Sock from "../components/Sock";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen11.</Text>
      <Sock />
      <Test />
    </View>
  );
}
