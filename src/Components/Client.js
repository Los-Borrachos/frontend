import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';


const Client = ({ match }) => {
	const history = useHistory();
	const [client, setClient] = useState();
	const [modal, setModal] = useState(false);
	useEffect(() => {
		axios
			.get(`${APIurl}/clients/${match.params.clientID}`)
			.then((data) => setClient(data))
			.catch(console.error);
	}, []);
	console.log(client);

	const handleChange = (event) => {
		setClient({ ...client, [event.target.name]: event.target.value });
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
			.put(`${APIurl}/clients/${match.params.clientID}`, client)
			.then(() => {
				history.push('/clients');
			})
			.catch(console.error);
	};

	const handleDelete = () => {
		axios
			.delete(`${APIurl}/clients/${match.params.clientID}`)
			.then(() => {
				history.push('/clients');
			})
			.catch(console.error);
	};

	if (!client) {
		return <h2>loading...</h2>;
	}

	return (
		<div className='client-page'>
			{modal ? (
				<div>
					<div>
						<h2>Edit this client:</h2>
						<form className='client-form' onSubmit={handleSubmit}>
							<label className='edit-name-label' />
							Client name:
							<input
								onChange={handleChange}
								name='name'
								placeholder='Name'
								value={client.name}
								className='edit-name-input'
							/>
							<label className='edit-name-label' />
							Organization:
							<input
								onChange={handleChange}
								name='organization'
								placeholder='Org'
								value={client.organization}
								className='edit-name-input'
							/>
							<br />
							<label className='edit-name-label' />
							Email:
							<input
								onChange={handleChange}
								name='email'
								placeholder='Email'
								value={client.email}
								className='edit-name-input'
							/>
							<label className='edit-name-label' />
							Phone:
							<input
								onChange={handleChange}
								name='phoneNumber'
								placeholder='Phone'
								value={client.phoneNumber}
								className='edit-name-input'
							/>
							<br />
							<label className='edit-name-label' />
							Next Steps:
							<input
								onChange={handleChange}
								name='nextSteps'
								placeholder='Step'
								value={client.nextSteps}
								className='edit-name-input'
							/>
							<label className='edit-name-label' />
							Sales Stage:
							<input
								onChange={handleChange}
								name='salesStage'
								placeholder='Stage'
								value={client.salesStage}
								className='edit-name-input'
							/>
							<label className='edit-name-label' />
							Revenue:
							<br />
							<input
								onChange={handleChange}
								type='number'
								placeholder='Revenue'
								name='totalRevenue'
								value={client.totalRevenue}
								className='edit-name-input'
							/>
							Image
							<input
								onChange={handleChange}
								type='text'
								name='image'
								value={client.image}
							/>
							<br />
							<button type='submit'>Submit</button>
							<button onClick={closeModal}>Close</button>
						</form>
					</div>
				</div>
			) : null}

			<h3> Client: {client.data.name} </h3>
			<div className='name-container'>
				<ul>
					<li>Email: {client.data.email}</li>
					<li>Phone: {client.data.phoneNumber}</li>
					<li>Organization: {client.data.organization}</li>
					<li>Next Steps: {client.data.nextSteps}</li>
					<li>Sales Stage: {client.data.salesStage}</li>
					<li>Revenue: ${client.data.totalRevenue}</li>
					<img
						className='images'
						src={client.data.image}
						onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
						alt=''
					/>
				</ul>
				<button onClick={editShowPage}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
				<br />
				<Link to='/clients'>
					<button>Back</button>
				</Link>
			</div>
		</div>
	);
};

export default Client;
