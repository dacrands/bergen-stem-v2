import React from 'react'

import Image from '../components/image'
import ImageTwo from '../components/imageTwo'
import ImageThree from '../components/imageThree'


const Projects = () => (
  <section id="projects" className="projects">
    <header className="projects__title">
      <h1>Projects</h1>
      <h3>Some of the things I've built</h3>
    </header>
    <div className="projects__main">
      <div className="card">        
        <div className="card__img">
          <Image />
        </div>
        <div className="card__content">
          <div className="card__title">
            <h3>New York Times App</h3>
            <p><em>React, Redux, Sass, Flask, Digitalocean</em></p>
          </div>
          <p>
            View the NYT Best-Sellers, browse popular articles,
            search archives dating back to the year 1900.
        </p>
          <p>
            Fetches data from a Flask app that implements
        </p>
          <div className="card__links">
            <a href="https://times.dcrands.com">NYT App</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
      <div className="card">
      <div className="card__img">
          <ImageTwo />
        </div>
        <div className="card__content">               
        <div className="card__title">
            <h3>To View It</h3>
            <p><em>Flask, Heroku, Postgreql</em></p>
          </div>
          <p>
            A to-do list application that features weather information,
            a stock-ticker, and full-screen background video.
        </p>
          <p>
            Imeplements email authentication using Sendgrid. Users
            can save stocks, todos, and YouTube videos.
        </p>
          <div className="card__links">
            <a href="https://times.dcrands.com">To View It</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
      <div className="card">
        
        <div className="card__img">
          <ImageThree />
        </div>
        <div className="card__content">
          <div className="card__title">
            <h3>Bergen STEM</h3>
            <p><em>React, Webpack, Fetch-API, 
responsive web-design via custom CSS</em></p>
          </div>
          <p>Showcases student projects, scholarship opportunities,
            and department information for the STEM program at Bergen Community College.
          </p>
          <div className="card__links">
            <a href="https://times.dcrands.com">NYT App</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
