import React from 'react'
import logo from '../assets/image/logo.png'

const NavBar = () => {
  return (
    <div className="navbar">
            <img src={logo} className="logo" alt='logo'/>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">page</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">service</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <button className="navbar-btn">BOOKING NOW</button>
    </div>
  )
}

export default NavBar;