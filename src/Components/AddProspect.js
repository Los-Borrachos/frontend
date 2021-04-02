import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';

const AddProspect = () => {
	const initialState = {
		name: '',
		organization: '',
		email: '',
		nextSteps: '',
		salesStage: '',
		totalRevenue: 0,
	};

	const history = useHistory();
	const [prospect, setProspect] = useState(initialState);
	const handleChange = (event) => {
		setProspect({ ...prospect, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post(`${APIurl}/prospects`, prospect)
			.then(() => {
				setProspect(initialState);
				history.push('/prospects');
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='create-form'>
				<label>Prospect's Name:</label>
				<input
					onChange={handleChange}
					name='name'
					value={prospect.name}
					placeholder='Name'
				/>
			</form>
		</div>
	);
};

export default AddProspect;
