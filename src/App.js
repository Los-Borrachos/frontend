import './CSS/App.css';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav.js';

import Client from './Components/Client';
import Clients from './Components/Clients';
import Login from './Components/Login';
import Prospects from './Components/Prospects.js'
import AddProspect from './Components/AddProspect.js'

function App() {
	return (
		<div className='App'>
			<header className='app-nav'>
				<Nav />
			</header>

			<main className='app-body'>
				<div>
					<Route path='/' exact>
						<Login/>
					</Route>
					<Route path='/clients'>
						<Clients />
					<Route
						path='/clients/:clientID' exact
						render={(routerProps) => <Client match={routerProps.match} />}
					/>
					</Route>
					{/* <Route path='/login'>
						<Login /> */}
					{/* </Route> */}
					<Route path='/prospects'>
						<Prospects />
					</Route>
					<Route path='/add-prospect'>
						<AddProspect />
					</Route>
				</div>
			</main>
		</div>
	);
}

export default App;
