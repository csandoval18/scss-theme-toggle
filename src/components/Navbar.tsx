import React from 'react'
import '../style/Navbar.scss'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav>
			<div className='nav-container'>
				<div className='logo'>CAS</div>
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Resume</a>
					</li>
					<li>
						<a href='#'>Portfolio</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
