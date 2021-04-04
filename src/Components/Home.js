import React from 'react';
import { Link } from 'react-router-dom';
import { Frame } from 'framer';
import logo from '../images/Hound-logo.png';
import '../CSS/Home.css'

function Home() {
    return (
			<div>
                
				<nav className='home-nav'>
					<Link to='/signin'>
						<button>Sign In</button>
					</Link>
					<Link to='/signup'>
						<button>Sign Up</button>
					</Link>
				</nav>
				<main className='home-main'>
					<div className='home-logo'>
                        <h2>Welcome to Hound!</h2>
						<Frame
							animate={{ rotate: 360 }}
							transition={{ duration: 3 }}
							size={250}
							radius={10}
							image={logo}
							opacity={0.85}
							center='x'
							top={195}
							position='sticky'
						/>
					</div>
					<div className='home-header'>
						<p>
							A Customer Relationship Management (or CRM) app is used to keep track of all of your companies relationships with current and future customers and clients. Our version, Hound, is a simple and easy and to use version of the classic technology that has been at the root of all customer based companies for decades. Just sign up, add a prospect and their information, move them over to the clients page, and see how easy it can be to keep track of all of your important buisness contacts!
						</p>
					</div>
				</main>
			</div>
		);
}

export default Home;