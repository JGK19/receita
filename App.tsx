import { useState } from "react";
import Calculate from "./screens/Calculate";
import Ingredients from "./screens/Ingredients";

const screens = {
  Calculate,
  Ingredients,
};
type ScreenNames = keyof typeof screens;

export type ScreenProps = {
  navigate: (value: ScreenNames) => void;
};

export default function App() {
  const [active, setActive] = useState<ScreenNames>("Calculate");

  return screens[active]({ navigate: setActive });
}
