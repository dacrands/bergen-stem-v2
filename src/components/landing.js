import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/color-logo.svg'
const Landing = () => (
  <main className="main">
    <div className="main__info">
      <Logo
        alt="Bergen STEM"
        style={{
          height: '100%',
          width: '100%',
          maxHeight: '200px',
          marginBottom: '2rem',
        }}
      />
    </div>
    <div className="main__side main__side--small">
      <ul>
        <li>
          <Link to="about">STEM at BCC</Link>
        </li>        
        <li>
        <Link to="3sp">STEM Student Scholars</Link>
        </li>
        <li>
          <a
            rel="noopener"
            target="_blank"
            href="https://bergen.edu/wp-content/uploads/Running-Start-Program-Poster-With-Link-1.pdf"
          >
            Running Start Program
          </a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </main>
)

export default Landing
