import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import after from "../images/about-after.png"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import arrow from "../images/arrow.svg"

const Background = styled.div`
  background-color: #1f2021;
  min-height: 400px;
  padding-top: 100px;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;
  z-index: 100;
  & a {
      &:hover{
          text-decoration: none;
      }
  }
`

const SmallHeader = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #f2f2f2;
`
const BigHeader = styled.h2`
  font-family: "Righteous", cursive;
  font-size: 48px;
  color: #ffffff;
  position: relative;
  z-index: 10;
`
const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #f2f2f2;
  padding-top: 40px;
`
const TextBlockWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: "";
    width: 28px;
    height: 200px;
    background-color: #f7e625;
    position: absolute;
    top: -20px;
    left: -80px;
    z-index: 10;
  }
  &:after {
    content: url(${after});
    position: absolute;

    top: 0px;
    right: 0px;
    z-index: 1;
  }
`

const ColWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    width: 300px;
    height: 150px;
    background-color: #f7e625;
    position: absolute;
    top: -20px;
    right: -20px;
    z-index: 0;
  }
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 10;
`

const LinkWrapper = styled.div`
margin-top: 40px;
width: 130px;
font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  position: relative;
  &:hover{
    text-decoration: none;
      color: #f7e625;
  }
&:after{
    content: url(${arrow});
    position: absolute;
    top: 0;
    right: -30px;
}
`

const About = () => {


  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "team.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Background>
      <Container fluid>
        <Row>
          <Container>
            <Row>
              <Col>
                <TextBlockWrapper>
                  <SmallHeader>O nas</SmallHeader>
                  <BigHeader>Tutaj można wrzucić jakieś dobre motto.</BigHeader>
                  <Description>
                    Tutaj coś o was. Home office because of actual corona
                    situation, we kindly inform you, that we will send invoices
                    only by email. Please forward it to responsible department –
                    This is related to all companies which received invoices
                    normally still by mail.
                  </Description>
                   <Link to="/about"><LinkWrapper>więcej o nas</LinkWrapper></Link>
                </TextBlockWrapper>
              </Col>
              <Col>
                <ColWrapper>
                  <PhotoWrapper>
                    <Img
                      fluid={data.image.childImageSharp.fluid}
                      alt="wewe team"
                    />
                  </PhotoWrapper>
                </ColWrapper>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </Background>
  )
}

export default About
