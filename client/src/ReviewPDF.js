import React from 'react'
import { useState } from "react";
import './ReviewPDF.css';
import Button from './Button'

function ReviewPDF() {
    const [check, setCheck] = useState(true);

    const PDFfile = () => {
        if (check ){ return <div className="review-box">Review the PDF below</div> }
        else { return <div className="review-box">You have not uploaded the file</div>}
    }

    return (
        <div className="review-wrapper">
            <PDFfile/>
            <Button title = "Verify PDF"/>
            
        </div>
    )
}

export default ReviewPDF
