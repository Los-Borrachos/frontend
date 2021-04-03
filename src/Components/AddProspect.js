import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import '../CSS/AddProspect.css';

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
			<h2>Add prospect:</h2>
			<form className='prospect-form' onSubmit={handleSubmit}>
				<label htmlFor='name' className='prospect-label' />
				prospect name:
				<input onChange={handleChange} name='name' value={prospect.name} />
				<label htmlFor='organization' className='prospect-label' />
				Organization:
				<input
					onChange={handleChange}
					name='organization'
					value={prospect.organization}
				/>
				<br />
				<label htmlFor='email' className='prospect-label' />
				Email:
				<input onChange={handleChange} name='email' value={prospect.email} />
				<label htmlFor='nextSteps' className='prospect-label' />
				Next Steps:
				<input
					onChange={handleChange}
					name='nextSteps'
					value={prospect.nextSteps}
				/>
				<br />
				<label htmlFor='salesStage' className='prospect-label' />
				Sales Stage:
				<input
					onChange={handleChange}
					name='salesStage'
					value={prospect.salesStage}
				/>
				<label htmlFor='totalRevenue' className='prospect-label' />
				Revenue:
				<input
					onChange={handleChange}
					type='text'
					name='totalRevenue'
					value={prospect.totalRevenue}
				/>
				<br />
				<button type='submit' id='submit'>
					Submit
				</button>
			</form>
			<button id='close'>Close</button>
		</div>
	);
};

export default AddProspect;
