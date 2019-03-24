import React, { Component } from 'react'
import { Link } from 'gatsby'

const primaryColor = '#3f19c7f1'

class Navbar extends Component {
  showMenu = () => {
    this.refs.navbar.classList.toggle('navbar--show')
  }

  render() {
    return (
      <div>
        <button className="navbar__show" onClick={this.showMenu}>
          {' '}
          &#x2630;
        </button>
        <nav ref="navbar" className="navbar">
          <div className="navbar__link">
            <Link to="/" activeStyle={{ color: primaryColor }}>
              Home
            </Link>
          </div>
          <div className="navbar__link">
            <Link to="/about" activeStyle={{ color: primaryColor }}>
              About
            </Link>
          </div>
          <div className="navbar__link">
            <Link to="/3sp" activeStyle={{ color: primaryColor }}>
              3sp
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
