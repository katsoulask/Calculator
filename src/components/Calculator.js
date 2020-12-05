import React from "react";
import "./panel.css";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", total: "" };
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
      a = this.state.value.split("+").map(x=>+x).reduce((a,b)=>a+b);
      return this.setState({ value: a });
    }  else if (this.state.value.includes("--")) {
      a = this.state.value.split("--").map(x=>+x).reduce((a,b)=>a+b);
      return this.setState({ value: a });} 
     
     else if (this.state.value.includes("X")) {
      a = this.state.value.split("X").map(x=>+x).reduce((a,b)=>a*b);
       return this.setState({ value: a }) 
    } else if (this.state.value.includes("-")) {
      a = this.state.value.split("-").map(x=>+x).reduce((a,b)=>a-b);
     return this.setState({value:a})
    } else if (this.state.value.includes("/")) {
      a = this.state.value.split("/").map(x=>+x).reduce((a,b)=>a/b);
      
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
              <input
                type="text"
                name="Display"
                id="display"
                disabled
                value={this.state.value}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                name="1"
                value="1"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="2"
                value="2"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="3"
                value="3"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                className="button"
                name="plus"
                value="+"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                name="4"
                value="4"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="5"
                value="5"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="6"
                value="6"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                className="button"
                name="-"
                value="-"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                name="7"
                value="7"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="8"
                value="8"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="9"
                value="9"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
                name="X"
                value="X"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                id="clear"
                name="C"
                value="C"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="zero"
                value="0"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                name="="
                value="="
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
              />
            </td>
            <td>
              <input
                type="button"
                onClick={(e) => {
                  this.handleClick(e.target.value);
                }}
                className="button"
                name="/"
                value="/"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
