import React from 'react';
import './styles/display.css'
export default function Display(props){
    let result=props.value;
    return(
    <input type='text' id='display' value={result}></input>
    )
}