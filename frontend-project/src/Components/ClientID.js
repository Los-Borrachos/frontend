import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const FlavorID = ({ match }) => {
	const history = useHistory();
	const [client, setClient] = useState(null);
	const [modal, setModal] = useState(false);
	useEffect(() => {
		const id = match.params.id;

		axios
			.get(`${APIurl}/client/${id}`)
			.then(({ data }) => setClient(data))
			.catch(console.error);
	}, [match.params.id]);

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
		// Write your PUT fetch() or axios() request here
		const id = match.params.id;
		axios
			.put(`${APIurl}/client/${id}`, client)
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		const id = match.params.id;
		axios
			.delete(`${APIurl}/client/${id}`)
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	if (!client) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='showID'>
			{modal ? (
				<div>
					<div>
						<h2>Edit current client:</h2>
						<form onSubmit={handleSubmit}>
							<label htmlFor='flavor' />
							<input
								onChange={handleChange}
								name='flavor'
								value={client.client}
							/>
							<label htmlFor='varieties' />
							<input
								onChange={handleChange}
								name='varieties'
								value={flavor.varieties}
							/>
							<br />
							<button type='submit'>Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			) : null}
			<h2>{client.client}</h2>
			<h3>name: {client.name}</h3>
			<button onClick={editShowPage}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};
export default ClientID;
