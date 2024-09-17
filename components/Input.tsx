import { StyleSheet, TextInput, View } from "react-native";
type InputProps = {
  value?: string,
  onChange?: (value: string) => void,
}
export default function Input({value, onChange}:InputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={{ flex: 1 }} value={value} onChangeText={onChange}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    minHeight: 50,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
