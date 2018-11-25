import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ siteTitle }) => (
  <nav className="navbar">    
    <div className="navbar__link">
    <Link to="/"
      activeStyle={{color:"blue"}}
    >
    Home           
    </Link>
    <hr className="navbar__hr"/>
    </div>
    <div className="navbar__link">
      
      <a href="">Services</a>
      <hr className="navbar__hr"/>
    </div>
    <div className="navbar__link">
      <a href="">Projects</a>
      <hr className="navbar__hr"/>
    </div>
    <div className="navbar__link">
      <a href="">Contact</a>
      <hr className="navbar__hr"/>
    </div>    
  </nav>
)

export default Navbar
