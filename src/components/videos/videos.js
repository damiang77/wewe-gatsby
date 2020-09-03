import React, { useEffect, useState, useRef, createRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row } from "react-bootstrap"
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

const SelectMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SelectButton = styled.div`
  margin: 5px;
  padding: 3px 15px;
  font-size: 16px;
  color: "#898989";
  transition-duration: 0.4s;
  border-radius: 15px;
  border: "transparent 2px solid";
  font-weight: 700;
  &:hover {
    color: #f7e625;
  }
`
const SelectButton2 = styled.div`
  margin: 5px;
  padding: 3px 15px;
  font-size: 16px;
  color: ${props =>
    props.buttonId === props.currentSelectedItem ? "#F7E625" : "#898989"};
  transition-duration: 0.4s;
  border-radius: 15px;
  border: "transparent 2px solid";
  font-weight: 700;
  &:hover {
    color: #f7e625;
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
  const [idActiveTab, setIdActiveTab] = useState(0)
  let notee;
  const data = useStaticQuery(query)
  const {
    allStrapiVideos: { nodes: videos },
  } = data

  let element = React.useRef()
  let sizer = React.useRef()

  
let shuffle;

  useEffect(() => {
    shuffle = new Shuffle(element.current, {
      itemSelector: ".photo-item",
      sizer: sizer.current,
    })
    console.log("shuffle reloaded")
  }, [notee])

  const handleFilterAll = () => {
    
    shuffle.filter(element => {
      return element.dataset.groups.includes("")
    })
  }
  const handleFilterMusicClips = () => {
  
    shuffle.filter(element => {
      return element.dataset.groups.includes("reklama")
    })
  }

  return (
    <Background>
      <Container fluid>
        <SelectMenuWrapper>
          <ButtonMain handleClick={handleFilterAll} activeTab={idActiveTab} currentButton={0}>
            Wszystko
          </ButtonMain>

          <ButtonMain
            handleClick={handleFilterMusicClips}
            activeTab={idActiveTab}
            id={1}
          >
            Fliter2
          </ButtonMain>
        </SelectMenuWrapper>
        <div ref={element} style={{ display: "flex" }}>
          {videos.map((video, index) => {
            return <Video key={index} video={video} ref={sizer} />
          })}
        </div>
      </Container>
    </Background>
  )
}

const ButtonMain = props => {
  return (
  
      <button
        onClick={props.handleClick}
        className={props.activeTab == props.currentButton ? "active" : ""}
      >{props.children}</button>
  
  )
}

export default Videos
