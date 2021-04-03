import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
			<form onSubmit={handleSubmit} className='create-prospect'>
				<label className='add-prospect-label'>Name: </label>
				<input
					onChange={handleChange}
					name='name'
					placeholder='Name'
					value={prospect.name}
					className='add-prospect-input'
				/>
				<label className='add-prospect-label'>Organization: </label>
				<input
					onChange={handleChange}
					name='organization'
					placeholder='Org'
					className='add-prospect-input'
				/>
				<label className='add-prospect-label'>Email: </label>
				<input
					onChange={handleChange}
					name='email'
					placeholder='Email'
					className='add-prospect-input'
				/>
				<label className='add-prospect-label'>Next Steps: </label>
				<input
					onChange={handleChange}
					name='nextSteps'
					placeholder='Step'
					className='add-prospect-input'
				/>
				<label className='add-prospect-label'>Sales Stage: </label>
				<input
					onChange={handleChange}
					name='salesStage'
					placeholder='Stage'
					className='add-prospect-input'
				/>
				<label className='add-prospect-label'>Total Revenue: </label>
				<input
					type='number'
					onChange={handleChange}
					name='totalRevenue'
					placeholder='Revenue'
					className='add-prospect-input'
				/>
				<input
					id='submit'
					type='submit'
					value='Submit'
					className='add-prospect-button'></input>
				<Link to='/prospects'>
					<button className='add-prospect-button'>Close</button>
				</Link>
			</form>
		</div>
	);
};

export default AddProspect;
