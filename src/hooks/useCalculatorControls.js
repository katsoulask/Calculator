import { useState } from "react";
import calculateValue from "../utils/calculateValue";

export default function useCalculatorControls() {
  const [value, setValue] = useState("");
  

  const handleClick = (button) => {
    if (button === "=") {
      return setValue(calculateValue(value));
    } else if (button === "C") {
      reset();
    } else {
      setValue(value + button);
    }
  };
  const reset = () => {
    setValue("");
  };

  return { handleClick, value };
}
