import './CSS/App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav.js';
import React, { useState } from 'react';

import Home from './Components/Home'
import Client from './Components/Client';
import Clients from './Components/Clients';
import Login from './Components/Login';
import Prospect from './Components/Prospect'
import Prospects from './Components/Prospects.js';
import AddProspect from './Components/AddProspect.js';
import SignUp from "./Components/SignUp"
function App() {
	const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "" );
	function logout() {
		localStorage.removeItem('token');
		setToken('');
	}

	return (
		<div className='App'>
			<header className='app-nav'>
				<Nav logout={logout} token={token} />
			</header>
			<main className='app-body'>
				<Switch>
					<Route path='/signup' component={SignUp} />
					<Route exact path='/' component={Home} />
					{!token ? (
						<Route
							exact
							path='/'
							// render={(props) => <Login {...props} setToken={setToken} />}
						/>
					) : (
						<>
							<Route path='/clients/:clientID' component={Client} />
							<Route path='/prospects/:prospectID' component={Prospect} />
							<Route exact path={['/', '/clients']} component={Clients} />
							<Route exact path='/prospects' component={Prospects} />
							<Route path='/add-prospect' component={AddProspect} />
						</>
					)}
					<Route
						path='*'
						render={(props) => <Login {...props} setToken={setToken} />}
					/>
				</Switch>
			</main>
		</div>
	);

}

export default App;
