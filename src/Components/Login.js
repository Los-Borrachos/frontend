import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';



function Login(props) {
	
	const initialState = {
		username: '',
		password: '',
		passwordConfirm: '',
	};
	const history = useHistory()
	const [formState, setFormState] = useState(initialState);
	const [valid, setValid] = useState(true);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		const credentials = {
			userName: formState.username,
			password: formState.password,
		};
		
		axios
			.post('http://localhost:5000/users/signin', credentials, {})
			.then((res) => {
				if (res.status === 200) {
				
					props.setToken(res.data.token)
					localStorage.setItem("token",res.data.token)

					history.push( '/clients');
					
				}
				
			})
			.catch((err) => {
				console.log(err);
				// alert("Bad Login, please try again");
				setValid(false)
				setFormState(initialState)
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
				{valid ? <p></p> : <p className = "bad">Bad login, try again</p>}
			</form>
		</div>
	);
}
export default Login;
