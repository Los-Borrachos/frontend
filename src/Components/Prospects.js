import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import ProspectModal from './ProspectModal';
import '../CSS/Clients.css';

const Clients = ({ match }) => {
	const history = useHistory();
	const [prospects, setProspects] = useState([]);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		axios
			.get(`${APIurl}/prospects`)
			.then((res) => setProspects(res.data))
			.catch(console.error);
	}, []);

	const handleDelete = () => {
		const id = match.params.id;

		axios
			.delete(`${APIurl}/prospects/${id}`)
			.then(() => {
				history.push('/prospects');
			})
			.catch(console.error);
	};

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<div>
			<h3>Current Prospects</h3>
			<button>Edit</button>
			{prospects.map((item) => {
				return (
					<div key={item._id}>
						<main className='client-card'>
							{' '}
							<Link to={`/prospects/${item._id}`} className='link'>
								<h3 className='col-1'>{item.name}</h3>
							</Link>
							<ul className='col-2'>
								<li>Organizaion: {item.organization}</li>
								<li>Email: {item.email}</li>
								{/* <li>Next Steps: {item.nextSteps}</li>
									<li>Sales Stage: {item.salesStage}</li>
									<li>Total Revenue: {item.totalRevenue}</li> */}
							</ul>
							<div className='buttons col-3'>
								<button onClick={openModal}>Edit</button>
								<button onClick={handleDelete}>Delete</button>
							</div>
						</main>
						{modal ? <ProspectModal id={item._id} closeModal={closeModal} /> : null}
					</div>
				);
			})}
		</div>
	);
};
export default Clients;
