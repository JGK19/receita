import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenProps } from "../App";
import { Octicons } from "@expo/vector-icons";

export default function Ingredients({ navigate }: ScreenProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate("Calculate")}>
        <Octicons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
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
