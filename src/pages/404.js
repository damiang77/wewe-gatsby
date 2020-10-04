import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"

const ErrorWrapper = styled.div`
width:100%;
height: 100vh;
background: black;
color: white;
display:flex;
flex-flow:column;
justify-content: center;
align-items: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorWrapper>
    <h1>404 - strony nie znaleziono</h1>
    <Link to="/"><h2>Strona główna</h2></Link>
    </ErrorWrapper>

  </Layout>
)

export default NotFoundPage
