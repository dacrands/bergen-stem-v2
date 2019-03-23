import React from 'react'
import { Link } from 'gatsby'

const Landing = () => (

<main className="main">
    <div className="main__info">
        <h1>Bergen STEM</h1>
        <h3>Science, Technology, Engineering, Mathematics</h3>
        <p>

        </p>
    </div>
    <div className="main__side main__side--small">
        <ul>
            <li><Link to="about">About</Link></li>
            <li><a href="#contact">Join STEM</a></li>
            <li><a href="http://">3SP Program</a></li>
            <li><a href="http://">Running Start Program</a></li>            
        </ul>
    </div>
</main>
)

export default Landing;