import React, { useState } from "react"
import ReactPlayer from 'react-player'
import styled from "styled-components"



const Video = props => {
  const [isLoading, setIsLoading] = useState(true)

  
  return (
    <>
      {isLoading && <div className="loader"></div>}

      <ReactPlayer url={props.src} playing={true} loop={true} onReady={()=> setIsLoading(false)}/>
      
    </>
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