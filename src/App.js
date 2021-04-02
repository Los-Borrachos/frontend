import './CSS/App.css';
import { Route, Switch } from 'react-router-dom';
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
				<Switch>
					<Route exact path='/' component={Login} />
				
					<Route
						path='/clients/:clientID' component={Client}/>
				
					<Route path='/clients' component={Clients}/>
				
					<Route path='/prospects' component={Prospects}/>
					
					<Route path='/add-prospect' component={AddProspect}/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
