import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../config';
import axios from 'axios';
import '../CSS/Clients.css';

const Clients = ({ match }) => {
	const [prospects, setProspects] = useState([]);

	useEffect(() => {
		axios
			.get(`${APIurl}/prospects`)
			.then((res) => setProspects(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<header className='page-header'>
				<h1 className='header-text'>Prospects</h1>
				<Link to='/add-prospect'>
					<button className='header-button'>Add prospect</button>
				</Link>
			</header>

			{prospects.map((item) => {
				return (
					<div key={item._id}>
						<main className='client-card'>
							{' '}
							<Link to={`/prospects/${item._id}`} className='link col-1'>
								<img className='images' src={item.image} alt='profile' />
								<h3 className=''>{item.name}</h3>
							</Link>
							<ul className='col-2'>
								<li>Organization: {item.organization}</li>
								<li>Phone: {item.phoneNumber}</li>
								<li>Email: {item.email}</li>
							</ul>
							<div className='buttons col-3'>
								<Link to={`/prospects/${item._id}`}>
									<button className='edit'>Edit</button>
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
