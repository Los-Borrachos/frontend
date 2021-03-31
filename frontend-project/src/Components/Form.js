import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
const Form = () => {
	const initialState = {
		Name: '',
		Organizaion: '',
		email: '',
        nextSteps: '',
        salesStage: '',
        totalRevenue: 0,
	};

	const history = useHistory();
	const [client, setClient] = useState(initialState);
	const handleChange = (event) => {
		setClient({ ...client, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your POST fetch() or axios() request here
		axios
			.post(`${APIurl}/clients`, client)
			.then(() => {
				setClient(initialState);
				history.push('/');
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='create-form'>
				<label htmlFor='flavor'>Flavor: </label>
				<input
					onChange={handleChange}
					name='flavor'
					value={client.client}
					placeholder='Flavor'
				/>
				<label htmlFor='varieties'>Varieties: </label>
				<input
					onChange={handleChange}
					name='varieties'
					value={flavor.varieties}
					placeholder='Varieties'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};
export default Form;
