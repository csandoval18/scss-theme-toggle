import React from 'react'
import '../style/Navbar.scss'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <div>CAS</div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#"></a>Resume</li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar