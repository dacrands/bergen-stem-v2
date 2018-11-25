import React from 'react'

const Skills = () => (
<section className="skills">


{/* <header className="skills__title">
  <div className="container">
    <h1>Skills</h1>
  
  </div>
</header> */}

<div className="container">
  <div className="skills__content">
    <div className="skills__item">
      <h2>Frontend</h2>
      <p>
        React
      </p>
      <p>
        Redux/GraphQL
      </p>
      <p>Responsiveness via custom CSS
  </p>
  <p>
  Semantic HTML  and other accessibility 
  practices ensure quality user
  experiences
  </p>
  <p>
  Webpack and static-site generators like GatsbyJS
  deliver fast page-loads
  </p>
      <p>
        Digitalocean hosting using Nginx servers
  </p>
    </div>
    <div className="skills__item">
      <h2>Backend</h2>
      <p>
        Flask
      </p>
      <p>

      </p>
      <p>
        Email support using Sendgrid
      </p>
      <p>
        SQLAlchemy ORM to create databases
      </p>
      <p>
        Bcrypt password encryption
      </p>
      <p>
        RESTful routing
      </p>
      <p>
        APIs implement CORS
      </p>
      <p>
        Digitalocean hosting using Nginx servers
      </p>
    </div>
  </div>
</div>
</section>
)

export default Skills