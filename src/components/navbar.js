import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navbar extends Component {
  
  showMenu = () => {
    this.refs.navbar.classList.toggle('navbar--show');
  }

  render() {
    return (
      <div>
        <button
          className="navbar__show"
          onClick={this.showMenu}>	&#x2630;</button>
        <nav ref="navbar" className="navbar">
          <div className="navbar__link">
            <Link to="/"
              activeStyle={{ color: "blue" }}
            >
              Home
      </Link>            
          </div>
          <div className="navbar__link">
            <Link to="/about"
              activeStyle={{ color: "blue" }}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    )
  }

}



export default Navbar
