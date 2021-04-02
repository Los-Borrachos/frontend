// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import APIurl from '../config';

// const ClientModal = ({ id, closeModal }) => {
// 	const history = useHistory();
// 	const [client, setClient] = useState(null);
	
//     useEffect(() => {
// 		axios
// 			.get(`${APIurl}/clients/${id}`)
// 			.then(({ data }) => setClient(data))
// 			.catch(console.error);
// 	}, []);

// 	const handleChange = (event) => {
// 		setClient({ ...client, [event.target.name]: event.target.value });
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		axios
// 			.put(`${APIurl}/clients/${id}`, client)
// 			.then(() => {
// 				history.push('/');
// 			})
// 			.catch(console.error);
// 	};

// 	if (!client) {
// 		return <h1>Loading...</h1>;
// 	}

// 	return (
// 		<div className='showID'>
			

// 				<div>
// 					<div>
// 						<h2>Edit current client:</h2>
// 						<form onSubmit={handleSubmit}>
// 							<label htmlFor='name' />
// 							<input
// 								onChange={handleChange}
// 								name='flavor'
// 								value={client.name}
// 							/>
// 							<label htmlFor='organization' />
// 							<input
// 								onChange={handleChange}
// 								name='organization'
// 								value={client.organization}
// 							/>
// 							<br />
// 							<button type='submit'>Submit</button>
// 						</form>
// 						<button onClick={closeModal}>Close</button>
// 					</div>
// 				</div>

// 		</div>
// 	);
// };
// export default ClientModal;
