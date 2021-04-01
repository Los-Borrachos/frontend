import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Clients from './Clients.js';
import Login from './Login.js';

const Nav = () => {
	return (
		<div className='nav'>
			<nav>
				<Link to='/login'>Login</Link>
				<Link to='/clients'>Clients</Link>
				<Link to='/prospects'>Prospects</Link>
			</nav>
			<Switch>
				<Route path='/clients'>
					<Clients />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</div>
	);
};
export default Nav;
