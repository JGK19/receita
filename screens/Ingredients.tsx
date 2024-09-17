import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScreenProps } from "../App";
import { Octicons } from "@expo/vector-icons";
import Input from "../components/Input";
import { useState } from "react";


export default function Ingredients({ navigate }: ScreenProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate("Calculate")} style={{ alignItems: "center" }}>
        <Octicons name="arrow-left" size={24} color="black" />
        <Text>Open!</Text>
      </TouchableOpacity>
      <Line></Line>
    </View>
  );
}

function Line() {
  const [name, setName] = useState<string>('')
  const [qt, setQt] = useState<string>('')
  const [unit, setUnit] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  return (
    <View style={styles.line}>
      <Input value={name} onChange={setName}/>
      <Input value={qt} onChange={setQt}/>
      <Input value={unit} onChange={setUnit}/>
      <Input value={price} onChange={setPrice}/>
      <Button title={'V'} onPress={()=> {
        console.log(name, qt, unit, price)
      }}></Button>
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
  line: {
    padding: 10,
    gap: 5,
    flexDirection: "row"
  }
});
