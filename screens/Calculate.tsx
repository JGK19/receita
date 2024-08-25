import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../App";

export default function Calculate({ navigate }: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Ingredientes" onPress={() => navigate('Ingredients')} />
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
