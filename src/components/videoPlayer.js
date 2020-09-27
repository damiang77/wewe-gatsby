import React, { useState, useContext, useEffect } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import BlurredBackground from "./blurredBackground"
import YouTube from "react-youtube"
import VideoPlayerContext from "../context/VideoPlayerContext"

const ContactBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const VideoPlayer = props => {
  const videoContext = useContext(VideoPlayerContext)
  const [isLoading, setIsLoading] = useState(true)
const [change, setChange] = useState(false)
 useEffect(()=>{
     
     return ()=>{
         setIsLoading(true)
        
     }
 },[change])

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1,
      modestbranding: 1,
    },
  }
  const style = {
    position: "relative",
    zIndex: 1010,
  }

  const handleCloseModal = () =>{
    videoContext.toggleVideoPlayer();
    setChange(!change)
  }

  function _onReady(event) {
    setIsLoading(false);
  }

  return (
    <>
      {videoContext.isOpen && (
        <BlurredBackground isVisible={videoContext.isOpen}>
          <ContactBoxWrapper onClick={handleCloseModal} />
          {isLoading &&
            <div className="loader"></div>}
            <YouTube
              videoId={videoContext.videoUrl}
              className="video-iframe"
              opts={opts}
              onReady={_onReady}
              style={style}
            />
          )
        </BlurredBackground>
      )}
    </>
  )
}

export default VideoPlayer
