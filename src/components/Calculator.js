import React from "react";
import "./panel.css";
import Button from "./Button";
import Display from "./Display";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({ value: this.state.value + button });
    }
  };
  reset = () => {
    this.setState({ value: "" });
  };
  calculate = () => {
    var a = [];

    if (this.state.value.includes("+")) {
      a = this.state.value
        .split("+")
        .map((x) => +x)
        .reduce((a, b) => a + b);
      return this.setState({ value: a });
    } else if (this.state.value.includes("--")) {
      a = this.state.value
        .split("--")
        .map((x) => +x)
        .reduce((a, b) => a + b);
      return this.setState({ value: a });
    } else if (this.state.value.includes("X")) {
      a = this.state.value
        .split("X")
        .map((x) => +x)
        .reduce((a, b) => a * b);
      return this.setState({ value: a });
    } else if (this.state.value.includes("-")) {
      a = this.state.value
        .split("-")
        .map((x) => +x)
        .reduce((a, b) => a - b);
      return this.setState({ value: a });
    } else if (this.state.value.includes("/")) {
      a = this.state.value
        .split("/")
        .map((x) => +x)
        .reduce((a, b) => a / b);

      return this.setState({ value: a });
    }
  };

  render() {
    return (
      <div className="calc-panel">
        <table className="content">
          <tr>
            <th colSpan="4">Calculator App</th>
          </tr>
          <tr className="display-row">
            <td colSpan="4">
              <Display value={this.state.value} />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={this.handleClick} name="1" value="1" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="2" value="2" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="3" value="3" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="+" value="+" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={this.handleClick} name="4" value="4" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="5" value="5" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="6" value="6" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="-" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={this.handleClick} name="7" value="7" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="8" value="8" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="9" value="9" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="X" value="X" />
            </td>
          </tr>
          <tr>
            <td>
              <Button handleClick={this.handleClick} name="C" value="C" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="zero" value="0" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="=" value="=" />
            </td>
            <td>
              <Button handleClick={this.handleClick} name="/" value="/" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
