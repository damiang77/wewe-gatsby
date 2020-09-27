import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import YouTube from "react-youtube"

const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`

const VideoBackground = styled.div`
 margin: 0 auto;
 overflow: hidden;
  & iframe {
    position: absolute;
    top: -9%;
    left: -10%;
    width: 125%;
    height: 125%;
    pointer-events: none;
    overflow: hidden;
  }
`

const HeroVideo = () => {
  const videoId = "X2B82mImdAc"

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1,
      modestbranding: 1
    },
  }

  return (
    <HeroWrapper>
      <VideoBackground>
        <YouTube
          videoId={videoId}
          className="video-iframe"
          opts={opts}
          onReady={_onReady}
        />
      </VideoBackground>
    </HeroWrapper>
  )

  function _onReady(event) {
    // access to player in all event handlers via event.target
  }
}

export default HeroVideo
