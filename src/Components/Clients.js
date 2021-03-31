import React, { useState, useEffect } from 'react';
import APIurl from '../config';
import axios from 'axios';
<<<<<<< HEAD
import '../CSS/Clients.css'
=======
import Button from 'react-bootstrap/Button'
>>>>>>> Added module/ small bug

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/clients`)
			.then((res) => setClients(res.data))
			.catch(console.error);
	}, []);
	
	return (
		<div>
			<p>rendered</p>
				{clients.map((item) => {
<<<<<<< HEAD
					return <div key={item.id}>
						<container className='client-card'
						>
							<h3
							className='col-1'
							>{item.name}</h3>
						<ul
						className='col-2'
						>
=======
					return <div className='client-card' key={item._id}>
							<h3>{item.name}</h3>
						<ul>
>>>>>>> Added module/ small bug
							<li>Organizaion: {item.organization}</li>
							<li>Email: {item.email}</li>
							<li>Next Steps: {item.nextSteps}</li>
							<li>Sales Stage: {item.salesStage}</li>
							<li>Total Revenue: {item.totalRevenue}</li>
						</ul>
<<<<<<< HEAD
						<div 
						className='buttons col-3'>
						<button>Edit</button>
						<button>Delete</button>
						</div>
						</container>
=======
						<button>Update</button>
						<button>Delete</button>
>>>>>>> Added module/ small bug
						</div>
				})}

		</div>
	);
};
export default Clients;
