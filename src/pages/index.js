import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Img } from 'gatsby-image'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Info from '../components/info'
import Projects from '../components/projects'
import Skills from '../components/skills'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Landing />
      <Info />
      <Projects />
    </div>

    <Skills />

    <section className="contact">
      <div className="container">
        <header className="contact__title">
          <h2>Get in touch</h2>
        </header>
        <div className="contact__form">
          <form className="form" method="POST" netlify="true" action="/success" className="form">
            <div className="form__item">
              <label htmlFor="name">
                Name
            <input name="name" type="text" />
              </label>
            </div>
            <div className="form__item">
              <label htmlFor="email">
                Email
            <input name="email" type="email" />
              </label>
            </div>
            <div className="form__item">
              <label htmlFor="message">
                Message me!
            <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10">
                </textarea>
              </label>
            </div>
            <div className="form__item">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     cardImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
// }
// `