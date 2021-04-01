import React, { useState, useEffect } from 'react';
import { useHistory, Route, Link } from 'react-router-dom'
import APIurl from '../config';
import axios from 'axios';
import Modal from './Modal';
import '../CSS/Clients.css';

const Clients = ({ match }) => {
	const history = useHistory()
	const [clients, setClients] = useState([]);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		axios
			.get(`${APIurl}/clients`)
			.then((res) => setClients(res.data))
			.catch(console.error);
	}, []);

	const handleDelete = () => {
		const id = match.params.id

		axios.delete(`${APIurl}/clients/${id}`).then(()=> {
			history.push('/clients')
		}).catch(console.error)
	} 

	const openModal = () => {
		setModal(true);
	};

	const closeModal = ()=>{
		setModal(false)
	}

	return (
		<div>
			<h3>Current Clients</h3>
			<button>Edit</button>
			{clients.map((item) => {
				return (
					<div key={item._id}>
						<Link to={`/client/${item._id}`} className='link'>
							<main className='client-card'>
								<h3 className='col-1'>{item.name}</h3>
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
							{modal ? (
								<Modal id={item._id} closeModal={closeModal}/>
							) : null}
						</Link>
					</div>
				);
			})}
		</div>
	);
};
export default Clients;
