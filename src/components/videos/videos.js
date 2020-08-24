import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row} from "react-bootstrap"
import Video from "./video/video.js"
import styled from "styled-components"

const Background = styled.div`
  background-color: #1f2021;
  min-height: 400px;
  width: 100%;
  padding-top: 100px;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;
  z-index: 100;
  color: white;
  & a {
    &:hover {
      text-decoration: none;
    }
  }
`

const query = graphql`
  {
    allStrapiVideos(sort: { order: ASC, fields: position___numer }) {
      nodes {
        description
        id
        strapiId
        title
        youtube_link
        categories {
          name
          id
        }
        photo {
          relativePath
          publicURL
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        position {
          numer
        }
      }
    }
  }
`

const Videos = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiVideos: { nodes: videos },
  } = data

  return (
    <Background>
      <Container fluid>
        <Row>
          {videos.map((video, index) => {
            return <Video key={index} video={video} />
          })}
        </Row>
      </Container>
    </Background>
  )
}

export default Videos
