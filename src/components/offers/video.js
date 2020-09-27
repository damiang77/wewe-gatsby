import React, { useState } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const PlayerWrapper = styled.div`
  position: relative;
`
const ButtonOnVideo = styled.button`
  position: absolute;
  color: black;
  bottom: 20px;
  right: 20px;
padding:10px 15px 10px 15px;

  background: #f7e625;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 1.5;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  border-radius: 3px;
  border: 3px solid transparent;
  transition: all 0.3s ease;

  &:hover{
    border: 3px solid #f7e625;
    background: transparent;
  }

`
const Video = props => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <PlayerWrapper>
      {isLoading && <div className="loader"></div>}

      <ReactPlayer
        url={props.src}
        playing={true}
        loop={true}
        muted={true}
        onReady={() => setIsLoading(false)}
      />
      <ButtonOnVideo>Zopoznaj się z ofertą</ButtonOnVideo>
    </PlayerWrapper>
  )
}

export default Video
/*
  <>
      {isLoading && <p>video is loading</p>}
      <video
        loop="true"
        preload="auto"
        autoplay="autoplay"
        muted
        onLoadEnd={() => setIsLoading(false)}
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </>

    */
