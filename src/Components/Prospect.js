import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';

const Prospect = ({ match }) => {
	const history = useHistory();
	const [prospect, setProspect] = useState();
	const [modal, setModal] = useState(false);
	useEffect(() => {
		axios
			.get(`${APIurl}/prospects/${match.params.prospectID}`)
			.then((data) => setProspect(data))
			.catch(console.error);
	}, );
	

	const handleChange = (event) => {
		setProspect({ ...prospect, [event.target.name]: event.target.value });
	};

	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${APIurl}/prospects/${match.params.prospectID}`, prospect)
			.then(() => {
				history.push('/prospects');
			})
			.catch(console.error);
	};

	const handleDelete = () => {
		axios
			.delete(`${APIurl}/prospects/${match.params.prospectID}`)
			.then(() => {
				history.push('/prospects');
			})
			.catch(console.error);
	};

    const transferClient = () => {
        axios.post(`${APIurl}/clients`, prospect.data)
        .then(handleDelete())
        console.log(prospect.data)
    }

	if (!prospect) {
		return <h2>loading...</h2>;
	}

	return (
		<div className='Prospect-page'>
			{modal ? (
				<div>
					<div>
						<h2>Edit this Prospect:</h2>
						<form className='prospect-form' onSubmit={handleSubmit}>
							<label htmlFor='name' />
							Prospect name:
							<input
								onChange={handleChange}
								name='name'
								placeholder='Name'
								value={prospect.name}
							/>
							<label htmlFor='organization' />
							Organization:
							<input
								onChange={handleChange}
								name='organization'
								placeholder='Org'
								value={prospect.organization}
							/>
							<br />
							<label htmlFor='email' />
							Email:
							<input
								onChange={handleChange}
								name='email'
								placeholder='Email'
								value={prospect.email}
							/>
							<label htmlFor='email' />
							Phone:
							<input
								onChange={handleChange}
								name='phoneNumber'
								placeholder='Phone'
								value={prospect.phoneNumber}
							/>
							<br />
							<label htmlFor='nextSteps' />
							Next Steps:
							<input
								onChange={handleChange}
								name='nextSteps'
								placeholder='Step'
								value={prospect.nextSteps}
							/>
							<label htmlFor='salesStage' />
							Sales Stage:
							<input
								onChange={handleChange}
								name='salesStage'
								placeholder='Stage'
								value={prospect.salesStage}
							/>
							<br />
							<label htmlFor='totalRevenue' />
							Revenue:
							<input
								onChange={handleChange}
								type='number'
								name='totalRevenue'
								placeholder='Revenue'
								value={prospect.totalRevenue}
							/>
							<br />
							Image
							<input
								onChange={handleChange}
								type='text'
								name='image'
								value={prospect.image}
							/>
							<br />
							<button type='submit'>Submit</button>
							<button onClick={closeModal}>Close</button>
						</form>
					</div>
				</div>
			) : null}

			<h3> Prospect: {prospect.data.name} </h3>
			<ul>
				<li>Email: {prospect.data.email}</li>
				<li>Phone: {prospect.data.phoneNumber}</li>
				<li>Organization: {prospect.data.organization}</li>
				<li>Next Steps: {prospect.data.nextSteps}</li>
				<li>Sales Stage: {prospect.data.salesStage}</li>
				<li>Revenue: ${prospect.data.totalRevenue}</li>
				<li>Picture Link: {prospect.data.image}</li>
				<img
					className='images'
					src={prospect.data.image}
					
					alt=''
				/>
			</ul>
			<button onClick={editShowPage}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
			<button onClick={transferClient}>Transfer to Client</button>
			<Link to='/prospects'>
				<button>Return</button>
			</Link>
		</div>
	);
};

export default Prospect;
