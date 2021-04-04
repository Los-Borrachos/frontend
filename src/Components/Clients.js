import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import '../CSS/Clients.css';

const Clients = ({ match }) => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/clients`)
			.then((res) => setClients(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>

			<header className='page-header'>
				<h1 className='header-text'>Clients</h1>
			</header>

			{clients.map((item) => {
				return (
					<div key={item._id}>
						<main className='client-card'>
							<Link to={`/clients/${item._id}`} className='link col-1'>
								<img
									className='images'
									src={item.image}
									onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
									alt=''
								/>
								<h3 className=''>{item.name}</h3>
							</Link>
							<ul className='col-2'>
								<li>Organization: {item.organization}</li>
								<li>Phone: {item.phoneNumber}</li>
								<li>Email: {item.email}</li>
							</ul>
							<div className='buttons col-3'>
								<Link to={`/clients/${item._id}`}>
									<button class='edit'>Edit</button>
								</Link>
							</div>
						</main>
					</div>
				);
			})}
		</div>
	);
};
export default Clients;
