import React from 'react';
import { Link } from 'react-router-dom';
import { Frame } from 'framer';
import logo from '../images/Hound-logo.png';
import '../CSS/Home.css'

function Home() {
    return (
        <div>
            <nav className='home-nav'>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
                <div className='home-logo'>
				<Frame
					animate={{ rotate: 360 }}
					transition={{ duration: 10 }}
					size={250}
                    radius={10}
                    image={logo}
                    opacity={.75}
                    center='x'
                    top={175}
                    position='absolute'
                    
				/>
                </div>
                <div className='home-header'>
                <h2>Welcome to Hound!</h2>
                </div>
			</div>
		);
}

export default Home;