import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageThree = () => (
  <StaticQuery
    query={graphql`
        query {
          ImageTwo: file(relativePath: { eq: "groundstation.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={data => <Img
      style={{
        width: "100%",
        maxHeight: "240px",
        padding: "1rem"
      }}
      fluid={data.ImageTwo.childImageSharp.fluid} />}
  />
)

export default ImageThree;