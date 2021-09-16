import React from 'react'
import { useState } from "react";
import './ReviewPDF.css';
import VerifyPDF from './VerifyPDF'

function ReviewPDF() {
    const [check, setCheck] = useState(true);

    const PDFfile = () => {
        if (check ){ return (
                <div className="review-box">
                    <p>Review the document below </p>
                    <VerifyPDF/>
                </div> 
                
                )
            }
        else { return (
            <div className="review-box">You have not uploaded the file</div>
            )
        }
    } 

    return (
        <div className="review-wrapper">
            <PDFfile/>
        </div>
    )
}

export default ReviewPDF
