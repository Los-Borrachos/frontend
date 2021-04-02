import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';

function Login() {
	const initialState = {
		username: '',
		password: '',
		passwordConfirm: '',
	};

	const [formState, setFormState] = useState(initialState);
	const [valid, setValid] = useState(false);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		const credentials = {
			userName: formState.username,
			password: formState.password,
		};
		console.log(credentials);
		axios
			.post('http://localhost:5000/users/signin', credentials, {})
			.then((res) => {
				if (res.status === 200) {
					console.log('path somewhere');
				}
			})
			.catch((err) => {
				console.log(err);
				console.log('alert user to retry ');
			});

		// const history = useHistory();
		// if (response.status === 200) {
		// 	history.push('/path');
		// }
	}

	return (
		<div className='login-page'>
			<h1>Sign In</h1>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					placeholder='Username'
					id='username'
					onChange={handleChange}
					value={formState.username}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					placeholder='Password'
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>

				<button type='submit'>Sign In</button>
				{/* {valid ? <p> match </p> : <p>Passwords must match.</p>} */}
			</form>
		</div>
	);
}
export default Login;
