import React from 'react'
import './Toolbar.css'
import {Link} from 'react-router-dom'

function Toolbar() {
    
    const styleToolbar = {
        color: "white",
        textDecoration: "none",
    }
    return (
        <nav> 
            <h3> Blockchain 2</h3>
            <ul className="nav-links"> 

                <Link style = {styleToolbar} to="/"> 
                    <li>Upload document </li>
                </Link>

                <Link style = {styleToolbar} to="/verify">
                    <li>Verify document </li>
                </Link>

                <Link style = {styleToolbar} to="/profile">
                    <li>Profile</li>
                </Link>

                <Link style = {styleToolbar} to="/about">
                    <li>About application</li>
                </Link>

                <Link style = {styleToolbar} to="/login">
                    <li>Logout</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Toolbar;