import React, { useState, useEffect, useContext } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import VideoPlayerContext from "../../../context/VideoPlayerContext"

const VideoContentWrapper = styled.div`
  width: 100%;
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
  display: flex;
  justify-content: center;
  z-index: 10;
  top: 0;
  left: 0;
  transition: all 0.3 ease;
  cursor: pointer;
  background: ${({ hovered }) =>
    hovered ? "rgba(0, 0, 0, 0.4);" : "rgba(0, 0, 0, 0);"};
`

const StyledImg = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${({ hovered }) => (hovered ? "scale(1.2)" : "scale (1)")};
`

const StyledCol = styled(Col)`
max-width:25%;
`

const HeaderText = styled.h3`
position: absolute;
font-size: 14px;
text-shadow: 0 3px 6px rgba(0,0,0,.26);
color: yellow;
transition: all 0.4s ease;
font-weight: 700;
transform: translate(0,${({ hovered }) => (hovered ? "40px" : "-80px")});
opacity: ${({ hovered }) => (hovered ? "1" : "0")};
`
const DescriptionText = styled.p`
position: absolute;
font-size: 12px;
font-weight: 700;
color: white;
text-align: center;
transition: all 0.4s ease;
bottom: -40px;
padding: 20px;
transform: translate(0,${({ hovered }) => (hovered ? "-80px" : "-40px")});
opacity: ${({ hovered }) => (hovered ? "1" : "0")};
`

const Video = props => {
  const [hovered, setHovered] = useState(false)
  const videoContext = useContext(VideoPlayerContext)

  const {description, title, youtube_link} = props.video;

  //Parse categories to a single string
  let categories = "";
  const categoriesFromProps = props.video.categories;
  for (const key of categoriesFromProps) {
    categories += key.name;
    categories += " ";
  }

  const handleClickItem = (e) =>{
    e.preventDefault();
    videoContext.handleOpenVideo(youtube_link)
  }


  return (
    <div className="photo-item" data-groups={categories}>

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
          onClick={handleClickItem}
        >
         <HeaderText hovered={hovered}>{title}</HeaderText>
         <DescriptionText hovered={hovered}>{description}</DescriptionText>
        </VideoHover>
      </VideoContentWrapper>

    </div>
  )
}

export default Video
