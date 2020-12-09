import React,{useState} from "react";
import "./panel.css";
import Button from "./Button";
import Display from "./Display";

export default function Calculator(){
  const [value,setValue]=useState('')
  
  const handleClick = (button) => {
    if (button === "=") {
     calculate();
    } else if (button === "C") {
      reset();
    } else {
      setValue(value + button );
    }
  };
  const reset = () => {
    setValue("" );
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

 
    return (
      <div className="calc-panel">
        <table className="content">
          <tr>
            <th colSpan="4">Calculator App</th>
          </tr>
          <tr className="display-row">
            <td colSpan="4">
              <Display value={value} />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={handleClick} name="1" value="1" />
            </td>
            <td>
              <Button handleClick={handleClick} name="2" value="2" />
            </td>
            <td>
              <Button handleClick={handleClick} name="3" value="3" />
            </td>
            <td>
              <Button handleClick={handleClick} name="+" value="+" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={handleClick} name="4" value="4" />
            </td>
            <td>
              <Button handleClick={handleClick} name="5" value="5" />
            </td>
            <td>
              <Button handleClick={handleClick} name="6" value="6" />
            </td>
            <td>
              <Button handleClick={handleClick} name="-" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={handleClick} name="7" value="7" />
            </td>
            <td>
              <Button handleClick={handleClick} name="8" value="8" />
            </td>
            <td>
              <Button handleClick={handleClick} name="9" value="9" />
            </td>
            <td>
              <Button handleClick={handleClick} name="X" value="X" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={handleClick} name="C" value="C" />
            </td>
            <td>
              <Button handleClick={handleClick} name="zero" value="0" />
            </td>
            <td>
              <Button handleClick={handleClick} name="=" value="=" />
            </td>
            <td>
              <Button handleClick={handleClick} name="/" value="/" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
