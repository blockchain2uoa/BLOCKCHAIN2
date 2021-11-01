import * as React from 'react';
import TonyImage from "../../images/tony.svg";
import { useState } from 'react';
import Popup from '../popup/Popup';
//import Button from '@mui/material/Button';
// import Redirect from "../components/redirect/Ridirect"

export default function Profile() {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
	  setIsOpen(!isOpen);
	}
	return (
		<div >
			{/*body*/}
			<div className = "flex flex-row justify-center">

				{/* left */}
				<div className="flex flex-col items-center text-center "> 

					{/* Profile Box */}
					<div className="box-border p-2 border-1 bg-gray rounded-2xl items-center text-center m-4 bg-gray-100" > 
						<p className="mx-4 font-mono -mb-7 text-primary text-opacity-100 md:hover:text-blue-600 text-2xl font-normal font-mono">My Profile</p>
						<img  src={TonyImage} alt='tonyimage' width="300" height="300" />
						<hr className="-mt-7"/>
						<div className="text-left mt-3">
							<p className="mx-4 font-mono "> User ID: a1753666</p>
							<p className="mx-4 font-mono "> Age: 21</p>
							<p className="mx-4 font-mono "> DoB: 04-03-1999</p>
                            <p className="mx-4 font-mono "> Email: asd@gmail.com</p>
						</div>
					</div>
					{/* Update btn */}
					<button className="btn-profile" variant="contained" color="neutral"  onClick={togglePopup}>Edit Profile</button> 

					{isOpen && <Popup
						content={<>
							<b>Edit your Profile</b>
							<form>
								<label className="flex flex-col">
									Name: <input type="text" name="Name" />
									DoB:  <input type="text" name="DoB" />
									Age:  <input type="text" name="Age" />
									Email:<input type="text" name="Email" />
									
								</label>
								<input type="submit" value="Submit" />
							</form>
							
						</>}
						handleClose={togglePopup}
					/>}
					
				</div>



			</div>

		</div>
	)
}
