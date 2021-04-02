// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import APIurl from '../config';

// const ProspectModal = ({ id, closeModal }) => {
// 	const history = useHistory();
// 	const [prospect, setProspect] = useState(null);

// 	useEffect(() => {
// 		axios
// 			.get(`${APIurl}/prospects/${id}`)
// 			.then(({ data }) => setProspect(data))
// 			.catch(console.error);
// 	}, []);

// 	const handleChange = (event) => {
// 		setProspect({ ...prospect, [event.target.name]: event.target.value });
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		axios
// 			.put(`${APIurl}/prospects/${id}`, prospect)
// 			.then(() => {
// 				history.push('/');
// 			})
// 			.catch(console.error);
// 	};

// 	if (!prospect) {
// 		return <h1>Loading...</h1>;
// 	}

// 	return (
// 		<div className='showID'>
// 			<div>
// 				<div>
// 					<h2>Edit current prospect:</h2>
// 					<form onSubmit={handleSubmit}>
// 						<label htmlFor='name' />
// 						<input
// 							onChange={handleChange}
// 							name='flavor'
// 							value={prospect.name}
// 						/>
// 						<label htmlFor='organization' />
// 						<input
// 							onChange={handleChange}
// 							name='organization'
// 							value={prospect.organization}
// 						/>
// 						<br />
// 						<button type='submit'>Submit</button>
// 					</form>
// 					<button onClick={closeModal}>Close</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default ProspectModal;
