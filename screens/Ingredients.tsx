import { StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../App";

export default function Ingredients({ navigate }: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Open!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
