import React,{useState} from 'react'
import { Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 
import './Upload.css'
import axios from 'axios'
import PopUp from '../popup/Popup'
// import HashInstance from '../../../../contract/instance'

const ENDPOINT = "http://localhost:9000/testAPI/upload";
var hashOfDoc = ''; 

export const Upload = () => {

	// call the contract when uploading the pdf
    // const campaigns = await factory.methods.getDeployedCampaigns().call()
    

	var objectHash = require('object-hash');

	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	

	const [pdfFile, setPdfFile]=useState(null);
	const [pdfFileError, setPdfFileError]=useState('');
	const [viewPdf, setViewPdf]=useState(null);
	const fileType=['application/pdf'];
	const [uploadBtn, setUploadBtn]=useState(false);
	const [popup, setPopup]=useState(false);

	const togglePopup = () => {
		setPopup(!popup);
	}

	const handlePdfFileChange=(e)=>{
		let selectedFile=e.target.files[0];

		console.log(selectedFile)
		if(selectedFile){
		if(selectedFile && fileType.includes(selectedFile.type)){
			let reader = new FileReader();
				reader.readAsDataURL(selectedFile);
				reader.onloadend = (e) =>{
				setPdfFile(e.target.result);
				setPdfFileError('');
				}
		}
		else{
			setPdfFile(null);
			setPdfFileError('Please select valid pdf file');
		}
		}
		else{
		console.log('select your file');
		}
	}

	// form submit
	const handlePdfFileSubmit=(e)=>{
		e.preventDefault();
		if(pdfFile!==null){
		setViewPdf(pdfFile);
		setUploadBtn(true)
		}
		else{
		setViewPdf(null);
		}
	}

	const handleHash=()=>{
		var hash = objectHash.sha1(pdfFile);
		hashOfDoc = hash;
		setPopup(true);
		console.log(hash)
		axios
		.post(ENDPOINT, {
			pdfHash: hash,
		})
			.then(response => console.log(response))
			.catch(error => console.log(error))
	}

	return (
		<div className='container'>

			{popup ? <PopUp
					content={<>
						<h1>Status</h1>
						
						<div className= "popup-div">
							<b> Account address:  </b> 
							<br/>
							<b> Hash of Document: {hashOfDoc} </b>
							<br/>
							<b> Deployed contract address: </b>
							<br/>
							<b> Deployed date: </b>
						</div>
			
					</>}
					handleClose={togglePopup}
					/>
			:(
			<>
				<br></br>
				
				<div className= "inner-container"> 
					<form className='form-group' onSubmit={handlePdfFileSubmit}>
						
						<input type="file" classNam e='form-control'
						required onChange={handlePdfFileChange}
						/>
						{pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}

						<br></br>

						<button type="submit" className='btn'> VIEW </button>

					</form>

					{uploadBtn ?  <button 
						className='btn-status'
						onClick = {handleHash}
						
					> UPLOAD </button> : <></>}

				</div>
				
				<br/>
				<hr/>
				<br/>

				<h2>View PDF</h2>

				<br/>

				<div className='pdf-container'>
			
					{viewPdf &&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
						<Viewer fileUrl={viewPdf}
								plugins={[defaultLayoutPluginInstance]} />
						</Worker></>
					}
					{ !viewPdf && <> No pdf file selected </>}

				</div>
			</>
			)}
			
		</div>
  )
}

export default Upload;