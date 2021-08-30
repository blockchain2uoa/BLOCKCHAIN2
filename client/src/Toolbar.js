import React from 'react'
import './Toolbar.css'
import Button from './Button'


function Toolbar() {
    return (
        <div className = "toolbar">
            <h1 className = "title"> Dashboard </h1>
            <Button title = "Connect to Wallet"/>
        </div>
    )
}

export default Toolbar
