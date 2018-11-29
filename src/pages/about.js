import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import WebpackSvg from '../images/svg/webpack-logo.svg'
import CssSvg from '../images/svg/css-3-logo.svg'
import FlaskSvg from '../images/svg/flask-logo.svg'
import PythonSvg from '../images/svg/python-logo.svg'
import SassSvg from '../images/svg/sass-logo.svg'
import ReactSvg from '../images/svg/react-logo.svg'
import ReduxSvg from '../images/svg/redux-logo.svg'
import PostmanSvg from '../images/svg/postman-logo.svg'
import HtmlSvg from '../images/svg/html-5-logo.svg'
import HerokuSvg from '../images/svg/heroku-logo.svg'


const SecondPage = () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>About</h1>
        <h3>David, programmer.</h3>
      </header>
      <div className="logos__container">        
          <div className="logos">   
          <div className="cover"></div>                      
            <ReactSvg className="logos__svg"/>              
            <ReduxSvg className="logos__svg"/>
            <FlaskSvg className="logos__svg"/>  
            <WebpackSvg className="logos__svg"/>  
            
            <PythonSvg className="logos__svg"/>  
            <SassSvg className="logos__svg"/>                            
            <PostmanSvg className="logos__svg"/>              
            <HerokuSvg className="logos__svg"/>              
            <CssSvg className="logos__svg"/>  
            <HtmlSvg className="logos__svg"/>              
          </div>
        </div>  
      <div className="about">         
           
        <p>Quite simply, I love programming. 
          Building things that look nice
          and serve a purpose really jazzes
          me out.
        </p>
        <p>
          I can also say (most) words backwards,
          which some people find mildly amusing.
        </p>
      </div>    
      <div className="clear">
      <Link  to="/">Go back home</Link>    
      </div>    
    </div>    
  </Layout>
)

export default SecondPage
