import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Login.css'







function Login () {
	 const [login, setLogin] = useState(null);
	 let user = "test"
	 let pass = "test"
	useEffect(() => {
		// POST request using axios inside useEffect React hook
		const credentials  = { userName: {user}, password: {pass} };
		axios
			.post('http://localhost:5000/users/signin', credentials)
			.then((response) => setLogin(response.data.id));

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

	const initialState = { 
		username: '',
		password: '', 
		passwordConfirm: '', 
	};

	const [formState, setFormState] = useState(initialState);
	const [valid, setValid] = useState(false);

	function handleChange (event) {
		setFormState({...formState, [event.target.id]: event.target.value})
  	}

	function handleSubmit (event) {
		event.preventDefault(); 
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
export default Login;
