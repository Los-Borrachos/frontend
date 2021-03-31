import React, { useState, useEffect } from 'react';
import APIurl from '../config';
import axios from 'axios';

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/clients`)
			.then((res) => setClients(res.data))
			.catch(console.error);
	}, []);


	
	return (
		<div className='clients'>
			<p>rendered</p>
				{clients.map((item) => {
					return <div key={item.id}>
						<container className='client-card'>
							<h3>{item.name}</h3>
						<ul>
							<li>Organizaion: {item.organization}</li>
							<li>Email: {item.email}</li>
							<li>Next Steps: {item.nextSteps}</li>
							<li>Sales Stage: {item.salesStage}</li>
							<li>Total Revenue: {item.totalRevenue}</li>
						</ul>
						<button onClick={editShowPage}>Edit</button>
						<button>Delete</button>
						</container>
						</div>
				})}

		</div>
	);
};
export default Clients;
