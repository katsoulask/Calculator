import React from 'react'
import './Calculator.css'
import Button from './Button'
import Display from './Display'
import useCalculatorControls from '../hooks/useCalculatorControls'

export default function Calculator() {
    const { handleClick, value } = useCalculatorControls()

    return (
        <div className="calc-panel">
            <table className="content">
                <tr>
                    <th colSpan="5">Calculator App</th>
                </tr>
                <tr className="display-row">
                    <td colSpan="5">
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
                        <Button handleClick={handleClick} name="/" value="/" />
                    </td>
                    <td rowSpan="4" id="plus">
                        <Button handleClick={handleClick} name="=" value="=" />
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
                        <Button
                            handleClick={handleClick}
                            name="zero"
                            value="0"
                        />
                    </td>
                    <td>
                        <Button handleClick={handleClick} name="." value="." />
                    </td>
                    <td>
                        <Button handleClick={handleClick} name="+" value="+" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
