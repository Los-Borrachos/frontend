import './App.css';
import { Route, Link } from 'react-router-dom'
import Nav from './Components/Nav.js';
import Clients from './Components/Clients.js';

function App() {
	return (
		<div className='App'>
			<nav className='app-nav'>
					{/* <Link to='/'>
						{' '}
						<img src={logo} alt='logo' />
					</Link> */}
				<Link 
				className='app-name'
				to='/clients'
				>
					<h1 >
						Hound
					</h1>
				</Link>
				<Link to='/add-prospect'>
					<button>
						Add prospect
					</button>
				</Link>
			</nav>
			<div>
				<Nav />
			</div>
		</div>
	);
}

export default App;
