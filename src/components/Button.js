import React from "react";

export default function Button (props) {
 
 
    return (
     
        <input
          type="button"
          value={props.value}
          onClick={(e)=>props.handleClick(e.target.value)}
        />
    )
}


