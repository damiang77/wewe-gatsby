import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
            fixed(width: 470 ) {
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
    <Layout>
      <SEO title="VIDEOS" />
      {videos.map((video, index) => {
        return  (
            <div>
                <Img key={index} fixed={video.photo.childImageSharp.fixed} alt="sdfasfads"/>
                {video.title}
            </div>
        )
        
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Videos
