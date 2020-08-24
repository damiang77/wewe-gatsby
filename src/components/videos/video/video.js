import React, { useState } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

const VideoContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const VideoHover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  transition: all 0.3 ease;
  background: ${({ hovered }) =>
    hovered ? "rgba(0, 0, 0, 0.3);" : "rgba(0, 0, 0, 0);"};
`

const StyledImg = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${({ hovered }) => (hovered ? "scale(1.2)" : "scale (1)")};
`

const Video = props => {
  const [hovered, setHovered] = useState(false)

  return (
    <Col lg="3">
      <VideoContentWrapper>
        <StyledImg
          fluid={props.video.photo.childImageSharp.fluid}
          alt="sdfasfads"
          hovered={hovered}
        />
        <VideoHover
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          hovered={hovered}
        >
          {props.video.title}
        </VideoHover>
      </VideoContentWrapper>
    </Col>
  )
}

export default Video
