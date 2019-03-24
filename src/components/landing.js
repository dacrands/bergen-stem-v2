import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/svg/color-logo.svg'
const Landing = () => (
  <main className="main">
    <div className="main__info">
      <Logo
        title="Bergen STEM"
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
          <Link to="about">About</Link>
        </li>
        <li>
          <a href="#contact">Join STEM</a>
        </li>
        <li>
          <a href="http://">3SP Program</a>
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
      </ul>
    </div>
  </main>
)

export default Landing
