import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Calculator from './Calculator'
import Navbar from './Navbar'
export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />

            <Route path="/Calc-app" component={Calculator} />
        </Router>
    )
}
