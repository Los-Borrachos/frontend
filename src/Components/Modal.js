import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const Modal = ({ match }) => {
	const history = useHistory();
	const [client, setClient] = useState(null);
	const [modal, setModal] = useState(false);
	
    useEffect(() => {
		const id = match.params.id;
		axios
			.get(`${APIurl}/clients/${id}`)
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
			.put(`${APIurl}/clients/${id}`, client)
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	// const handleDelete = () => {
	// 	// Write your DELETE fetch() or axios() request here
	// 	const id = match.params.id;
	// 	axios
	// 		.delete(`${APIurl}/clients/${id}`)
	// 		.then(() => {
	// 			history.push('/');
	// 		})
	// 		.catch(console.error);
	// };

	if (!client) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='showID'>
			{modal ? 
            (
				<div>
					<div>
						<h2>Edit current client:</h2>
						<form onSubmit={handleSubmit}>
							<label htmlFor='name' />
							<input
								onChange={handleChange}
								name='flavor'
								value={client.name}
							/>
							<label htmlFor='organization' />
							<input
								onChange={handleChange}
								name='organization'
								value={client.organization}
							/>
							<br />
							<button type='submit'>Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			) 
        : null}

		</div>
	);
};
export default Modal;
