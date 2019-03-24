import React from 'react'
import Video from './video'

const Theater = () => (
  <section className="skills">
    <div className="container">
      <div className="box box--big">
        <div className="box__item">
          <h2>Students talk STEM</h2>
          <p>
            Listen to BCC students discuss their experiences in the STEM
            program.
          </p>
        </div>
        <div className="box__video">
          <Video />
        </div>
      </div>
    </div>
  </section>
)

export default Theater
