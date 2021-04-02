import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';
import logo from '../images/Hound-logo.png';


const Nav = () => {
	return (
		
		<div className='nav'>
			<Link className='app-name' to='/clients'>
				<img src={logo} className='logo' alt='hound logo' />
				<h1>Hound</h1>
			</Link>

			<Link to='/clients' className='clients-link'>
				Clients
			</Link>

			<Link to='/prospects' className='prospects-link'>
				Prospects
			</Link>

			<Link to='/add-prospect'>
				<button>Add prospect</button>
			</Link>
		</div>
	);
};
export default Nav;
