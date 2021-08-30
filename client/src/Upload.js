import React from 'react'
import './Upload.css'
import Button from './Button'

function Upload() {
    return (
        <div className="upload">
            <h3 className="upload-title">Upload file here: </h3> 
            <Button title= "Upload file" />
        </div>
    )
}

export default Upload
