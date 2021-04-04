import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
				<Link to='/add-client'>
					<button className='header-button'>Add Client</button>
				</Link>
			</header>

			{clients.map((item) => {
				return (
					<div key={item._id}>
						<main className='client-card'>
							<Link to={`/clients/${item._id}`} className='link'>
								<h3 className='col-1'>{item.name}</h3>
								<img
									className='images'
									src={item.image}
									onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
									alt=''
								/>
							</Link>
							<ul className='col-2'>
								<li>Organizaion: {item.organization}</li>
								<li>Email: {item.email}</li>
							</ul>
							<div className='buttons col-3'>
								<Link to={`/clients/${item._id}`}>
									<button class='edit'>Edit</button>
								</Link>
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
