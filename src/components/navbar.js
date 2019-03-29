import React, { Component } from 'react'
import { Link } from 'gatsby'

const primaryColor = '#3f19c7f1'
const linkStyle = { color: primaryColor }

class Navbar extends Component {
  showMenu = () => {
    this.refs.navbar.classList.toggle('navbar--show')
  }

  render() {
    return (
      <div>
        <button aria-label="menu button" className="navbar__show" onClick={this.showMenu}>
          {' '}
          &#x2630;
        </button>
        <nav ref="navbar" className="navbar">
          <div className="navbar__link">
            <Link to="/" activeStyle={ linkStyle }>
              Home
            </Link>
          </div>
          <div className="navbar__link">
            <Link to="/about" activeStyle={ linkStyle }>
              About
            </Link>
          </div>
          <div className="navbar__link">
            <Link to="/3sp" activeStyle={ linkStyle }>
              3sp
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
