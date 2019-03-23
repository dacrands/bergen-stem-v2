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
      <div className="about">                    
        <div className="about__content">
            <h3>Hands-on Faculty</h3>
            <p>
              At Bergen Community College, our STEM faculty understand
              the value of proper research experience in a student's academic career. 
              Our program provides students the guidance and support they need to answer the scientific questions that interest them most. 
            </p>    
        </div>        
        <div className="about__img">
          <Image />
        </div>        
      </div>    

      <div className="about">                    
      <div className="about__img">
          <ImageTwo />
        </div>  
        <div className="about__content">
            <h3>Real World Research Experience</h3>
            <p>Thanks to the STEMatics grant, Bergen Community College is 
              equipped with top of the line research equipment and facilities. 
              This enables students to build skills in current technologies being used 
              in modern industry.</p>          
        </div>                
      </div>    

      <div className="about">                    
      
        <div className="about__content">
            <h3>Supportive Environment</h3>
            <p>
              Majoring in STEM is a difficult task, but that doesn't mean it can't be fun too.
              At Bergen Community College, students have the opportunity to collaborate with
              other students and faculty that share similar passions. 
              </p>          
        </div>       
        <div className="about__img">
          <ImageThree />
        </div>           
      </div>    

      <div className="clear">
      <Link  to="/">Go back home</Link>    
      </div>    
    </div>    
  </Layout>
)

export default SecondPage
