import React from 'react'
import './Button.css'

const Button = (probs) =>  {
    return (
        <div className="btn-wrapper">
            <button 
                className="btn"
                //onClick={}
            > { probs.title } </button>
        </div>
    )
}

export default Button
