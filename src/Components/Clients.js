import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import APIurl from '../config';
import axios from 'axios';
import '../CSS/Clients.css';

const Clients = ({ match, item }) => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/clients`)
			.then((res) => setClients(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<h3>Current Clients</h3>
			<button>Edit</button>
			{clients.map((item) => {
				return (
					<div key={item._id}>
							<main className='client-card'>					
							<Link to={`/clients/${item._id}`} className='link'>
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
									<button>Edit</button>
									{/* <button onClick={handleDelete}>Delete</button> */}
								</div>
							</main>
							{/* {modal ? (
								<ClientModal id={item._id} closeModal={closeModal}/>
							) : null} */}
					</div>
				);
			})}
		</div>
	);
};
export default Clients;
