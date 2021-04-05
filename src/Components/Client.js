import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';
import '../CSS/Client.css';
import '../CSS/AddProspect.css';

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

	const handleChange = (event) => {
		setClient({ ...client, [event.target.name]: event.target.value});
		console.log(client.data)
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
						<form onSubmit={handleSubmit} className='prospect-form'>
							<div className='add-prospect-col1'>
								<div className='field'>
									<label className='add-prospect-label'>Client Name: </label>
									<input
										onChange={handleChange}
										name='name'
										placeholder='Name'
										value={client.name}
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Organization: </label>
									<input
										onChange={handleChange}
										name='organization'
										placeholder='Org'
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Email: </label>
									<input
										onChange={handleChange}
										name='email'
										placeholder='Email'
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Phone: </label>
									<input
										onChange={handleChange}
										name='phoneNumber'
										placeholder='Phone'
										className='add-prospect-input'
									/>
								</div>
							</div>

							<div className='add-prospect-col2'>
								<div className='field'>
									<label className='add-prospect-label'>Next Steps: </label>
									<input
										onChange={handleChange}
										name='nextSteps'
										placeholder='Step'
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Sales Stage: </label>
									<input
										onChange={handleChange}
										name='salesStage'
										placeholder='Stage'
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Total Revenue: </label>
									<input
										type='number'
										onChange={handleChange}
										name='totalRevenue'
										placeholder='Revenue'
										className='add-prospect-input'
									/>
								</div>

								<div className='field'>
									<label className='add-prospect-label'>Image Link: </label>
									<input
										onChange={handleChange}
										name='image'
										placeholder='image link'
										className='add-prospect-input'
									/>
								</div>
							</div>

							<div className='form-buttons'>
								<button
									id='submit'
									type='submit'
									value='Submit'
									className='add-prospect-button'>
									Submit
								</button>
								
									<button className='add-prospect-button' onClick = {closeModal}>Close</button>
								
							</div>
						</form>
					</div>
				</div>
			) : null}

			<div className='profile'>
				<header className='profile-header'>
					<h3>Client: {client.data.name}</h3>
					<img
						className='images'
						src={client.data.image}
						onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
						alt={client.data.name}
					/>
				</header>

				<div className='info-container'>
					<ul>
						<li>Email: {client.data.email}</li>
						<li>Phone: {client.data.phoneNumber}</li>
						<li>Organization: {client.data.organization}</li>
						<li>Next Steps: {client.data.nextSteps}</li>
						<li>Sales Stage: {client.data.salesStage}</li>
						<li>Revenue: ${client.data.totalRevenue}</li>
					</ul>

					<div className='profile-buttons'>
						<button onClick={editShowPage}>Edit</button>
						<button onClick={handleDelete}>Delete</button>
<br/>
						<Link to='/clients'>
							<button>Return</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Client;
