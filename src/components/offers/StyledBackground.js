import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Background = (props) => (
  <StaticQuery
    query={graphql`
    query Image {
        image: file(relativePath: { eq: "bg-oferta.jpg" }) {
          id
          childImageSharp {
            fluid (quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
   
      const imageData = data.image.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={props.className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {props.children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackground = styled(Background)`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
  min-height: 700px;
  padding-top:4rem;
  padding-bottom:4rem;
`

export default StyledBackground