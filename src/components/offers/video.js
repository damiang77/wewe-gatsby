import React from "react"


const Video = props => {
  return (
      <video loop="true" autoplay="autoplay" muted>
        <source src={props.src} type="video/mp4" />
      </video>
  )
}

export default Video
