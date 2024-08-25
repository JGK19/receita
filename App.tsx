import { useState } from "react";
import Calculate from "./screens/Calculate";
import Ingredients from "./screens/Ingredients";
import { SafeAreaView } from "react-native-safe-area-context";

const screens = {
  Calculate,
  Ingredients,
};
type ScreenNames = keyof typeof screens;

export type ScreenProps = {
  navigate: (value: ScreenNames) => void;
};

export default function App() {
  const [active, navigate] = useState<ScreenNames>("Calculate");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screens[active]({ navigate })}
    </SafeAreaView>
  );
}
