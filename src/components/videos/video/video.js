import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"



const Videos = (props) => {

  return (
    <div>
         <Img fixed={props.video.photo.childImageSharp.fixed} alt="sdfasfads"/>
                {props.video.title}
    </div>
  )
}

export default Videos
