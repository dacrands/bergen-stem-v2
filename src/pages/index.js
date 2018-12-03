import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Img } from 'gatsby-image'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Info from '../components/info'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Landing />
      <Info />
      <Projects />
    </div>
    <Skills />
    <Contact />

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