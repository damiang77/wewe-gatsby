import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Team from "./Team"

const TeamBackground = props => (
  <StaticQuery
    query={graphql`
      query Image3 {
        image: file(relativePath: { eq: "team-background.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 100) {
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
          backgroundColor={`#f3f3f3`}
        >
         <Team/>
        </BackgroundImage>
      )
    }}
  />
)

const TeamComponent = styled(TeamBackground)`
  width: 100%;
  background-position: center 20%;
  background-size: cover;
  margin:0;
  padding-left:0;
  padding-right: 0;
`

export default TeamComponent
