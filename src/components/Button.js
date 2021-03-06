import React from 'react'
import './Button.css'
export default function Button(props) {
    return (
        <input
            type="button"
            value={props.value}
            onClick={(e) => props.handleClick(e.target.value)}
            className="button"
        />
    )
}
