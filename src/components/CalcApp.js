import React,{useState} from 'react';


export default function CalcApp(){
    const [value,setValue]=useState('')
    const handleClick = (button) => {
      if (button === "=") {
        calculate();
      } else if (button === "C") {
        reset();
      } else {
        setValue(value + button);
      }
    };
    const reset = () => {
      setValue("");
    };
    const calculate = () => {
      var a = [];
  
      if (value.includes("+")) {
        a = value
          .split("+")
          .map((x) => +x)
          .reduce((a, b) => a + b);
        return setValue(a);
      } else if (value.includes("--")) {
        a = value
          .split("--")
          .map((x) => +x)
          .reduce((a, b) => a + b);
        return setValue(a);
      } else if (value.includes("X")) {
        a = value
          .split("X")
          .map((x) => +x)
          .reduce((a, b) => a * b);
        return setValue(a);
      } else if (value.includes("-")) {
        a = value
          .split("-")
          .map((x) => +x)
          .reduce((a, b) => a - b);
        return setValue(a);
      } else if (value.includes("/")) {
        a = value
          .split("/")
          .map((x) => +x)
          .reduce((a, b) => a / b);
  
        return setValue(a);
      }
    };
  
    return {handleClick,value}
  }
  