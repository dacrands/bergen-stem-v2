import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Image from '../components/image'
import ImageTwo from '../components/imageTwo'
import ImageThree from '../components/imageThree'

const SecondPage = () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>About</h1>
        <h3>Why study STEM at BCC?</h3>
      </header>

      <div className="card">
        <div className="card__img">
          <Image />
        </div>
        <div className="card__content">
          <h3>Hands-on Faculty</h3>
          <p>
            At Bergen Community College, our STEM faculty understand the value
            of proper research experience in a student's academic career. Our
            program provides students the guidance and support they need to
            ask the scientific questions that interest them most.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card__img">
          <ImageTwo />
        </div>
        <div className="card__content">
          <h3>Real World Research Experience</h3>
          <p>
            Thanks to the STEMatics grant, Bergen Community College is equipped
            with top of the line research equipment and facilities. This enables
            students to build skills in current technologies being used in
            modern industry.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card__img">
          <ImageThree />
        </div>
        <div className="card__content">
          <h3>Resources</h3>
          <p>
            Majoring in STEM is a difficult task, so be sure to utilize our{' '}
            <a
              href="https://bergen.edu/wp-content/uploads/Running-Start-Program-Poster-With-Link-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              free prep classes
            </a>{' '}
            and award-winning tutoring services to get the
          </p>
        </div>
      </div>

      
      <button className="button button--outline" onClick={() => window.history.back()}>Go Back</button>
      
    </div>
  </Layout>
)

export default SecondPage
