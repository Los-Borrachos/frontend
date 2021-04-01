import React from 'react';
import { Link, Switch } from 'react-router-dom';
import '../CSS/Nav.css'

const Nav = () => {
	return (
		<div className='nav'>
			<Link 
			className='app-name'
			to='/clients'
			>
				<h1 >
					Hound
				</h1>
			</Link>
			<Link to='/clients'>Clients</Link>
			<Link to='/prospects'>Prospects</Link>
			<Link to='/add-prospect'>
				<button>Add prospect</button>
			</Link>
		</div>
	);
};
export default Nav;
