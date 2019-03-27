import React from 'react'
import { Link } from 'gatsby'

import School from '../images/svg/school.svg'
import Join from '../images/svg/join.svg'
import Book from '../images/svg/books.svg'

const Projects = () => (
  <section id="projects" className="projects">
    <header className="projects__title">
      <h2>Studying STEM at BCC</h2>
      <h3>Science, Technology, Engineering, Mathematics</h3>
    </header>
    <div className="projects__main container">
      <div className="card">
        <div className="card__svg">
          <Book />
        </div>
        <div className="card__content">
          <h3>Running Start Program</h3>
          <p>
            Prep Classes are designed to give students a better foundation to
            start the courses they will be taking in the upcoming semesters.
          </p>
          <p>
            Eligible students have the option of taking the respective
            proficiency exam after completing the boot camp and possibly test
            out of the course.
          </p>
          <a
            className="button"
            rel="noopener"
            target="_blank"
            href="https://bergen.edu/wp-content/uploads/Running-Start-Program-Poster-With-Link-1.pdf"
          >
            Running Start &#10138;
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card__svg">
          <School />
        </div>
        <div className="card__content">
          <h3>STEM Student Scholars Program</h3>
          <p>
            Promotes excellence in knowledge, skills and ability of a select
            group of STEM students to ensure their success in securing research
            internships and successful transfer to their targeted 4-year
            institution.
          </p>
          <Link className="button" to="3sp">
            3SP
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card__svg">
          <Join />
        </div>
        <div className="card__content">
          <h3>
            STEM C<sup>2</sup> Research Summit
          </h3>
          <p>
            A competitive conference that promotes the intellectual and
            investigative development of students, faculty and staff in the
            Science, Technology, Engineering and Mathematics fields and fosters
            strong collaboration among community colleges, high schools and
            four-year colleges and universities in the state of New Jersey.
          </p>
          <a
            className="button"
            target="_blank"
            rel="noopener"
            href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/stem-summit/"
          >
            STEM Summit &#10138;
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Projects
