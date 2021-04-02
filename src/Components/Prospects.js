import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import '../CSS/Clients.css';

const Clients = ({ match }) => {
	console.log(match)
	const [prospects, setProspects] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/prospects`)
			.then((res) => setProspects(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<h3>Current Prospects</h3>
			<Link to='/add-prospect'>
				<button>Add prospect</button>
			</Link>
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
							</ul>
							<div className='buttons col-3'>
								<button>Edit</button>
							</div>
						</main>
					</div>
				);
			})}
		</div>
	);
};
export default Clients;
