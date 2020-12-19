import React from 'react'
import './Home.css'

import math from '../images/math.jpg'
export default function Home() {
    return (
        <div>
            <h1>Calculator App</h1>
            <img src={math} alt="math-image" />
            <p>
                <i>Calculator made with React,React-hooks,React-Router</i>
            </p>
            <p>Click the link in the Navigation bar to check the application</p>
        </div>
    )
}
