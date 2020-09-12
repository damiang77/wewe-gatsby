import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import TeamMember from "./TeamMember"
import { Link } from "gatsby"
import arrow from "../../images/arrow.svg"

const TeamWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 4rem;
  padding-bottom: 4rem;
  & a {
      &:hover{
          text-decoration: none;
      }
  }
`
const Heading = styled.h2`
  font-family: "Righteous", cursive;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
`
const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin: 0;
  margin-top: -10px;
  padding: 0;
`
const ColCustom = styled(Col)`
width: 100%;
display: flex;
justify-content:center;
padding-top: 2rem;
`
const LinkWrapper = styled.div`
  margin-top: 40px;
  width: 130px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  position: relative;
  text-decoration: none;
  &:hover {
    text-decoration: none !important;
    color: #f7e625;
  }
  &:after {
    content: url(${arrow});
    position: absolute;
    top: 0;
    right: -30px;
  }
`

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      f1: file(relativePath: { eq: "f1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f2: file(relativePath: { eq: "f2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f3: file(relativePath: { eq: "f3.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f4: file(relativePath: { eq: "f4.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f5: file(relativePath: { eq: "f5.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)
  const TeamInfo = {
    grzegorz: {
      name: "Grzegorz Dorochowicz",
      job: "VFX Efekty specjalne",
      skills: ["Animacja 3D", "CGI", "Green screen"],
      photo: data.f1.childImageSharp.fluid,
    },
    mateusz: {
      name: "Mateusz Wagan",
      job: "Animacja, Montaż",
      skills: ["Storyboard", "Montaż", "Animacja 2D"],
      photo: data.f2.childImageSharp.fluid,
    },
    pawel: {
      name: "Pawel Marek",
      job: "Produkcja, Fotografia",
      skills: ["Kierownictwo", "Zdjęcia", "Montaż"],
      photo: data.f3.childImageSharp.fluid,
    },
    olaf: {
      name: "Olaf Bressa",
      job: "Kamera, Technikalia",
      skills: ["Kamera", "Obsługa sprzętu", "Światło"],
      photo: data.f4.childImageSharp.fluid,
    },
    piotr: {
      name: "Piotr Nowak",
      job: "Dron, Asystent kamery",
      skills: ["Hyperlapse", "Panning", "3D Panorama"],
      photo: data.f5.childImageSharp.fluid,
    },
  }
  return (
    <TeamWrapper>
      <Container>
        <Row>
          <Col>
            <Heading>Nasz zespół</Heading>
            <Description>poznaj nas</Description>
          </Col>
        </Row>
        <Row style={{ marginTop: "120px" }}>
          <Col>
            <TeamMember info={TeamInfo.grzegorz} />
          </Col>
          <Col>
            <TeamMember info={TeamInfo.mateusz} />
          </Col>
          <Col>
            <TeamMember info={TeamInfo.pawel} />
          </Col>
          <Col>
            <TeamMember info={TeamInfo.olaf} />
          </Col>
          <Col>
            <TeamMember info={TeamInfo.piotr} />
          </Col>
        </Row>
        <Row>
          <ColCustom>
            <Link to="/about">
              <LinkWrapper>więcej o nas</LinkWrapper>
            </Link>
          </ColCustom>
        </Row>
      </Container>
    </TeamWrapper>
  )
}

export default Team
