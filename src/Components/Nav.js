import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Clients from './Clients.js';
import Home from './Home.js';

const Nav = () => {
	return (
		<div className='nav'>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/clients'>Clients</Link>
			</nav>
			<Switch>
				<Route path='/clients'>
					<Clients />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
};
export default Nav;
