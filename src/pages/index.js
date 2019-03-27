import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Info from '../components/info'
import Projects from '../components/projects'
import Theater from '../components/theater'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Landing />
    </div>     
    <div className="container container--big">
      <Info />
    </div>
    <div className="container container--big">
      <Projects />
    </div>
    <Theater />
    <Contact />
  </Layout>
)

export default IndexPage
