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
			<ul>
				{clients.map((item) => {
					return <li>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};
export default Clients;
