import React from "react"
import { graphql, StaticQuery, useStaticQuery} from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import HowWeWorkContent from "./howWeWorkContent"

const Background = props => (
  <StaticQuery
    query={graphql`
      query Image2 {
        image: file(relativePath: { eq: "howwework.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90) {
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
         <HowWeWorkContent/>
        </BackgroundImage>
      )
    }}
  />
)

const HowWeWork = styled(Background)`
  width: 100%;
  background-position: center center;
  background-size: cover;
  margin:0;
  padding-left:0;
  padding-right: 0;
`

export default HowWeWork
