import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
	}, []);
	console.log(prospect);

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
		return <h1>loading...</h1>;
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
							<input onChange={handleChange} name='name' value={prospect.name} />
							<label htmlFor='organization' />
							Organization:
							<input
								onChange={handleChange}
								name='organization'
								value={prospect.organization}
							/>
							<br />
							<label htmlFor='email' />
							Email:
							<input
								onChange={handleChange}
								name='email'
								value={prospect.email}
							/>
							<label htmlFor='nextSteps' />
							Next Steps:
							<input
								onChange={handleChange}
								name='nextSteps'
								value={prospect.nextSteps}
							/>
							<br />
							<label htmlFor='salesStage' />
							Sales Stage:
							<input
								onChange={handleChange}
								name='salesStage'
								value={prospect.salesStage}
							/>
							<label htmlFor='totalRevenue' />
							Revenue:
							<input
								onChange={handleChange}
								type='text'
								name='totalRevenue'
								value={prospect.totalRevenue}
							/>
							<br />
							<button type='submit'>Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			) : null}

			<h3> Prospect: {prospect.data.name} </h3>
			<ul>
				<li>Email: {prospect.data.email}</li>
				<li>Organization: {prospect.data.organization}</li>
				<li>Next Steps: {prospect.data.nextSteps}</li>
				<li>Sales Stage: {prospect.data.salesStage}</li>
				<li>Revenue: ${prospect.data.totalRevenue}</li>
			</ul>
			<button onClick={editShowPage}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
            <button onClick={transferClient}>Transfer to Client</button>
		</div>
	);
};

export default Prospect;
