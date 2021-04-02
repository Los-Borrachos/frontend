import './CSS/App.css';
import { Route, Link } from 'react-router-dom'
import Nav from './Components/Nav.js';
// import Clients from './Components/Clients.js';
import Client from './Components/Client'
import Clients from './Components/Clients'
import Login from './Components/Login'

function App() {
	// added comment
	return (
		<div className='App'>
			<header className='app-nav'>
			<Nav/>
			</header>

			<main className="app-body">
					{/* <Link to='/'>
						{' '}
						<img src={logo} alt='logo' />
					</Link> */}
				<div>
					<Route path='/clients'>
						<Clients />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route
					path='/client/:clientID'
					render={(routerProps) => <Client match={routerProps.match}/>}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
