import React, {useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row} from "react-bootstrap"
import Video from "./video/video.js"
import styled from "styled-components"
import Shuffle from "shufflejs"

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

  let element = React.createRef()
  let sizer = React.createRef()
  let shuffle;
  useEffect(()=>{
    shuffle = new Shuffle(element.current, {
      itemSelector: ".photo-item",
      sizer: sizer.current,
    })
  })

  const handleFilter = () =>{
    shuffle.filter((element)=>{
        return element.dataset.groups.includes('teledysk');
    });
}

  return (
    <Background>
      <Container fluid>
      <button onClick={handleFilter}>Fliter</button>
        <div ref={element} style={{display: "flex"}}>
          {videos.map((video, index) => {
            return <Video key={index} video={video} ref={sizer}/>
          })}
        </div>
      </Container>
    </Background>
  )
}

export default Videos
