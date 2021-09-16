import React from 'react'
import './VerifyPDF.css'


function Verify() {
    return (
        <div className="upload">
            <div className="btn-wrapper">
            
                <form action="/upload" method="POST" enctype="multipart/form-data">
                    <button 
                    className="btn"//onClick={}
                    > Verify </button>
                </form>
            
            </div>
        </div>
    )
}

export default Verify