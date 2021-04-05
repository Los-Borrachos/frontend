import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';
import '../CSS/Client.css'
import '../CSS/AddProspect.css'

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
						<form onSubmit={handleSubmit} className='prospect-form'>
							<div className='add-prospect-col1'>
								<div className='field'>
									<label className='add-prospect-label'>Name: </label>
									<input
										onChange={handleChange}
										name='name'
										placeholder='Name'
										value={prospect.name}
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
					<h3>Prospect: {prospect.data.name}</h3>
					<img
						className='images'
						src={prospect.data.image}
						onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
						alt=''
					/>
				</header>

				<div className='info-container'>
					<ul>
						<li>Email: {prospect.data.email}</li>
						<li>Phone: {prospect.data.phoneNumber}</li>
						<li>Organization: {prospect.data.organization}</li>
						<li>Next Steps: {prospect.data.nextSteps}</li>
						<li>Sales Stage: {prospect.data.salesStage}</li>
						<li>Revenue: ${prospect.data.totalRevenue}</li>
					</ul>

					<div className='profile-buttons client-page'>
						<button onClick={editShowPage}>Edit</button>
						<button onClick={handleDelete}>Delete</button>
						<button onClick={transferClient}>Transfer to Client</button>
						<Link to='/prospects'>
							<button>Return</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prospect;
