import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Video from "./video/video.js"

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
            fixed(width: 470) {
              ...GatsbyImageSharpFixed
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

  return (
<>
      {videos.map((video, index) => {
        return <Video key={index} video={video}/>
      })}
</>
  )
}

export default Videos
