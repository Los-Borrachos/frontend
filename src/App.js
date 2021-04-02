import './CSS/App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav.js';
import React, { useState } from 'react';

import Client from './Components/Client';
import Clients from './Components/Clients';
import Login from './Components/Login';
import Prospect from './Components/Prospect'
import Prospects from './Components/Prospects.js';
import AddProspect from './Components/AddProspect.js';

function App() {
	const [token, setToken] = useState('');
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
					{!token ? (
						<Route
							exact
							path='/'
							render={(props) => <Login {...props} setToken={setToken} />}
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

	// return (
	// 	<div className='App'>
	// 		<header className='app-nav'>
	// 			<Nav />
	// 		</header>

	// 		<main className='app-body'>
	// 			<Switch>
	// 				<Route exact path='/' component={Login} />

					// <Route
					// 	path='/clients/:clientID' component={Client}/>

					// <Route path='/prospects/:prospectID' component={Prospect}/>

	// 				<Route path='/clients' component={Clients}/>

	// 				<Route path='/prospects' component={Prospects}/>

	// 				<Route path='/add-prospect' component={AddProspect}/>
	// 			</Switch>
	// 		</main>
	// 	</div>
	// );
}

export default App;
