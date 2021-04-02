import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';


function Login() {
	const initialState = {
		username: '',
		password: '',
		passwordConfirm: '',
	};
	const history = useHistory()
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
					console.log('path somewhere')
					// history.pushState(null, 'Login');
					history.push( '/clients');
					// history.pop("/clients")
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

				<Link></Link><button type='submit'>Sign In</button>
				{/* {valid ? <p> match </p> : <p>Passwords must match.</p>} */}
			</form>
		</div>
	);
}
export default Login;
