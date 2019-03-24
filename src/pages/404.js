import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <header className="header">
        <h1>NOT FOUND</h1>
        <h3>That page doesn't seem to exist</h3>
        <button className="button button--outline" onClick={() => window.history.back()}>Go Back</button>
      </header>
    </div>    
  </Layout>
)

export default NotFoundPage
