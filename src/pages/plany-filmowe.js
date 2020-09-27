import React, { useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import Header from "../components/header"
import ResponsivePlayer from "../components/responsivePlayer"
import after from "../images/about-after.png"

const ContainerFluid = styled(Container)`
  background: #1b1b1b;
  padding-top: 100px;
`

const PlayerWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`

const RowMargin = styled(Row)`
  margin-top: 5rem;
`

const MainTextHeader = styled.h2`
  font-family: "Righteous", cursive;
  padding:10px;
  margin-top: 1rem;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  color: #ffffff;
`
const Colored = styled.span`
color: #F7E625;
`
const MainTextDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  padding: 15px;
  padding-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #BDBDBD;
`
const ImgCustom = styled(Img)`
position: relative;
z-index:2;
`
const ImgWrapper = styled.div`
  position: relative;
  &:after {
    content: url(${after});
    position: absolute;
    bottom: -60px;
    left: -20px;
    z-index: 1;
  }
`

const TextDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #BDBDBD;
`

const IndexPage = ({ data }) => {
  const {
    allStrapiOrganizacjaPlanow: { nodes },
  } = data

  const content = nodes[0]

  return (
    <Layout>
      <SEO title="Organizacja" description="" />
      <ContainerFluid fluid>
        <Row>
          <Container>
            <Row>
              <Col>
                <Header siteTitle={content.header} />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col>
                <PlayerWrapper>
                  <ResponsivePlayer id="PTq7lHeVe4w" />
                </PlayerWrapper>
              </Col>
            </Row>
            <RowMargin>
              <Col xl={6}>
                <ImgWrapper>
                  <ImgCustom
                    fluid={content.photo.childImageSharp.fluid}
                    alt={content.header2}
                  />
                </ImgWrapper>
              </Col>
              <Col xl={6}>
                <MainTextHeader>{content.header2}<Colored>.</Colored></MainTextHeader>
                <MainTextDescription>{content.description}</MainTextDescription>
              </Col>
            </RowMargin>
            {content.description2 && (
              <RowMargin>
                <Col>
                  <TextDescription>{content.description2}</TextDescription>
                </Col>
              </RowMargin>
            )}
          </Container>
        </Row>
        <Row>
          <ContactForm />
        </Row>
      </ContainerFluid>
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allStrapiOrganizacjaPlanow {
          nodes {
            id
            header2
            header
            description
            description2
            photo {
              relativePath
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

/*

font-family: 'Lato', sans-serif;
font-family: 'Righteous', cursive;

*/
