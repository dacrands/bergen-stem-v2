import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Img } from 'gatsby-image'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Info from '../components/info'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>      
    <Landing />
    <Info />
    <Projects />
   
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