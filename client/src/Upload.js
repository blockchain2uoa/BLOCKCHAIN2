import React from 'react'
import './Upload.css'


function Upload() {
    return (
        <div className="upload">
            <h3 className="upload-title">Upload file here: </h3> 
            <div className="btn-wrapper">
            
                <form className = "uploadFile" action="/upload" method="POST" enctype="multipart/form-data">
                    <input className = "inputPDF" type="file" name="file" multiple/> 
                    <button 
                    className="btn"//onClick={}
                    > Upload File  </button>
                </form>
            
            </div>
        </div>
    )
}

export default Upload
