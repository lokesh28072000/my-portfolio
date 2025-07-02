import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen]= useState(false)
  const toggleMenu = () => {
setMenuOpen(!menuOpen)
  }
  return (
    <>
    <nav className='navbar'>
      <div><h2>Lokesh</h2></div>
      <ul className={`nav-links ${menuOpen? "active" : ''}`}>
   <li><Link to="/" >Home</Link></li>
        <li><Link to="/About" >About</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
       <button className="download-btn">Resume</button>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>      
    </nav>
    </>
  )
}

export default Navbar