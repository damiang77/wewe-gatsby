import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Videos from "../components/videos/videos"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" title="moj tytul"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Videos/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
    <Link to="/videos/">Go to VIDEOS :-)</Link>
  </Layout>
)

export default IndexPage
