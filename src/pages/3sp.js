import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const StudentScholars = () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>3SP</h1>
        <h3>STEM Student Scholars</h3>
      </header>
      <section>
        <h2>Information</h2>
        <hr/>
        <div className="card card__small">        
        <div className="card__content">
          <h3>Benefits</h3>
          <p>
            Students who successfully participate in the program shall have an
            opportunity in their second summer in the program to
            participate in an internship off campus in their target 4-year college or industry.
      </p>
        </div>   
        <div className="card__content">
          <h3>Purpose</h3>
          <p>
          The STEM Student Scholars Program shall promote excellence in knowledge, 
          skills and ability of a select group of STEM students to ensure their success 
          in securing research internships and successful transfer to their targeted 4-year institution.
      </p>
        </div>
        
        {/* <div className="card__content">
          <h3>KSA Learning</h3>
          <ul>
            <li> <em>Knowledge</em>
              <ul>
                <li>Understandning principles related to a particular subject</li>
              </ul>
            </li>
            <li><em>Skills</em>
              <ul>
                <li>How to use something or perform a particular task</li>
              </ul>
            </li>
            <li><em>Ability</em>
              <ul>
                <li>Competence to perform an observable behavior or a behavior that results in an observable product</li>
              </ul>
            </li>
          </ul>
        </div>    */}

      </div>
      </section>
      

      <section>
      <h2>Requirements</h2>
      <hr/>
        <div className="card card__small">
          <div className="card__content">
            <h3>Eligibility Requirements</h3>
            <ol>
              <li>STEM degree seeking</li>
              <li>Minimum 3.75 Cumulative GPA</li>
              <li>Finished 12 college level credits with no additional remediation required</li>
            </ol>
          </div>
          <div className="card__content">
            <h3>Admission Requirements</h3>
            <ol>
              <li>Attended one information session</li>
              <li>Completed and submitted a 3SP application</li>
              <li>Will remain a Bergen student through the fall {new Date().getFullYear() + 1} semester</li>
              <li>Joined a 3SP Faculty Research Mentor’s project team for Summer I or Summer II internship</li>
            </ol>
          </div>
          <div className="card__content">
            <h3>Ongoing Requirements to remain in good standing</h3>
            <ol>
              <li>Maintaining minimum 3.750 Cumulative GPA</li>
              <li>Contributing member of the STEM Student Union club</li>
              <li>Punctual and responsive to official 3SP communications</li>
              <li>Working to complete 3SP Academic, Research and Service Requirements</li>
              <li>Successfully completed an on campus 3SP Summer I or Summer II internship</li>
            </ol>
          </div>
        </div>
      </section>
      


      <section>
      <h2>3SP Program Elements</h2>
      <hr/>
        <div className="card card__small">
          <div className="card__content">
            <h3>Research elements</h3>
            <p>Students of the Program must participate in:</p>
            <ol>
              <li>On-campus faculty-mentored internship project in their first summer of the program</li>
              <li>Off-campus internship project in their second summer of the program</li>
              <li>The student shall contribute a minimum of 2 hours per week working on a project during the fall and spring semesters</li>
              <li>The student shall become a contributing member of the STEM Student Union club</li>
            </ol>
          </div>
          <div className="card__content">
            <h3>Additional Research elements</h3>
            <p> <em>**Determined by 3SP Faculty Research Mentors</em> </p>
            <ol>
              <li>Co-author with team members a weekly blog documenting project progress throughout Summer I or Summer II internships</li>
              <li>Co-author a professional quality poster of project for STEM C2 Research Summit at Bergen Community College</li>
              <li>Give presentations at various events and meetings both on-campus and off-campus</li>              
            </ol>
          </div>          
        </div>
      </section>
      <button className="button button--outline" onClick={() => window.history.back()}>Go Back</button>
    </div>
    
  </Layout>
)

export default StudentScholars