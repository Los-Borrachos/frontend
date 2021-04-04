import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Login.css'

import { useHistory } from 'react-router-dom';





function SignUp () {
	
	

	const initialState = { 
		username: '',
		password: '', 
		passwordConfirm: '', 
	};

	const [formState, setFormState] = useState(initialState);
	const [valid, setValid] = useState(false);
	const history = useHistory();
	function handleChange (event) {
		setFormState({...formState, [event.target.id]: event.target.value})
  	}

	function handleSubmit (event) {
		event.preventDefault(); 
		const credentials = {
			userName: formState.username,
			password: formState.password,
		};
		axios
			.post('http://localhost:5000/users/signup', credentials)
			.then((res) => {
				if (formState.password === formState.passwordConfirm) {
					if (res.status === 201) {
						console.log('path somewhere signup');

						history.push('/signin');
					}
					setValid(true);
				} else {
					setValid(false);
				}
				
			})
			.catch((err) => {
				console.log(err);
				// alert("Bad Login, please try again");
				setValid(false);
				setFormState(initialState);
			});

		if (formState.password === formState.passwordConfirm){
			setValid(true);
			

		} else {
			setValid(false);
		}
		setFormState(initialState);
  	}

	return (
		<div className='login-page'>
				<h1>Sign Up</h1>
					<form 
					className='form'
					onSubmit={handleSubmit}
					>

						<label htmlFor="username">Username</label>
						<input 
						type="text" 
						placeholder="Username" 
						id="username"
						onChange={handleChange}
						value={formState.username}
						/>
						

						<label htmlFor="password">Password</label>
						<input type="password"
						placeholder="Password" 
						id="password" 
						onChange={handleChange}
						value={formState.password}
						/>

						<label htmlFor="passwordConfirm">Confirm password</label>
						<input
						type="password"
						placeholder="Confirm password"
						id="passwordConfirm"
						onChange={handleChange}
						value={formState.passwordConfirm}
						/>

						<button type="submit">Sign Up</button>
						{valid ? <p> match </p> : <p>Passwords must match.</p>}
					</form>
		</div>
	);
};
export default SignUp;
