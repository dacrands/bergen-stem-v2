import React from 'react'

import Image from '../components/image'
import ImageTwo from '../components/imageTwo'


const Projects = () => (
  <section className="projects">
    <div className="projects__title">
      <h1>Projects</h1>
      <p>Some of the things I've built</p>
    </div>
    <div className="projects__main">
      <div className="card">
        <div className="card__content">
          <div className="card__title">
            <h3>To View It</h3>
            <p><em>Flask, Heroku, Postgreql</em></p>
          </div>
          <p>
            View the NYT Best-Sellers, browse popular articles,
            search archives dating back to the year 1900.
        </p>
          <p>
            Fetches data from a Flask app that implements
        </p>
          <div className="card__links">
            <a href="">Website</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="card__img">
        <Image />
        </div>        
      </div>
      <div className="card">
        <div className="card__content">
          <div className="card__title">
            <h3>To View It</h3>
            <p><em>Flask, Heroku, Postgreql</em></p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>        
        </div>
        <div className="card__img">
          <ImageTwo />
        </div>        
      </div>
      <div className="card">
        <div className="card__title">
          <h3>To View It</h3>
          <p><em>Flask, Heroku, Postgreql</em></p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto.
        </p>

      </div>
    </div>
  </section>
);

export default Projects;
