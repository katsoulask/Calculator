import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../utils/path'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <ul className="nav-bar">
                {paths.map((objLink, i) => {
                    return (
                        <li key={i}>
                            <Link to={objLink.link} className="link">
                                <p>{objLink.text}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
