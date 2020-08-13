import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import StyledBackground from "./StyledBackground"
import Video from "./video"
import organizacjaVideo from "../../shortVideo/organizacja-compressed.mp4"
import fotoVideo from "../../shortVideo/foto-compressed.mp4"
import animacjaVideo from "../../shortVideo/animacja-compressed.mp4"
import storyboardVideo from "../../shortVideo/storyboard-compressed.mp4"
import cgiVideo from "../../shortVideo/cgi-compressed.mp4"

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
  margin-bottom: 3rem;
`

const Button = styled.div`
  background: transparent;
  border: 0;
  border-left: ${props =>
    props.active ? "4px solid yellow" : "4px solid transparent"};
  color: ${props => (props.active ? "yellow" : "white")};
  margin: 1rem 0 1rem 0;
  font-weight: 400;
  background: ${props => (props.active ? "rgba(255,255,255,0.1)" : "transparent")};

  &:hover {
    color: yellow;
  }
  padding: 10px 0px 10px 30px;
  width: 100%;
  cursor: pointer;
`
const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  & > video {
    width: 100%;
  }
`

const Offers = () => {
  const [chosenVideo, setChosenVideo] = useState(0)

  const renderSwitchVideo = chosenVideo => {
    let component
    switch (chosenVideo) {
      case 0:
        component = <Video key="organizacja" src={organizacjaVideo} />
        break
      case 1:
        component = <Video key="animacja" src={animacjaVideo} />
        break
      case 2:
        component = <Video key="storyboard" src={storyboardVideo} />
        break
      case 3:
        component = <Video key="foto" src={fotoVideo} />
        break
      case 4:
        component = <Video key="cgi" src={cgiVideo} />
        break
      default:
        return "Something went wrong. Please reload the page."
    }
    return component
  }

  return (
    <div>
      <StyledBackground>
        <Container>
          <Row>
            <Col>
              <Heading>Oferta</Heading>
              <Description>w tym się specjalizujemy</Description>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Button
                onClick={() => setChosenVideo(0)}
                active={chosenVideo === 0}
              >
                Organizacja planów filmowych i zdjęciowych
              </Button>
              <Button
                onClick={() => setChosenVideo(1)}
                active={chosenVideo === 1}
              >
                Animacja 2D i ilustracje
              </Button>
              <Button
                onClick={() => setChosenVideo(2)}
                active={chosenVideo === 2}
              >
                Storyboardy
              </Button>
              <Button
                onClick={() => setChosenVideo(3)}
                active={chosenVideo === 3}
              >
                Fotografia
              </Button>
              <Button
                onClick={() => setChosenVideo(4)}
                active={chosenVideo === 4}
              >
                Animacje 3D i CGI
              </Button>
              <Button
                onClick={() => setChosenVideo(5)}
                active={chosenVideo === 5}
              >
                Social Media Content
              </Button>
              <Button
                onClick={() => setChosenVideo(6)}
                active={chosenVideo === 6}
              >
                Live stream
              </Button>
              <Button
                onClick={() => setChosenVideo(7)}
                active={chosenVideo === 7}
              >
                Ujęcia z drona
              </Button>
            </Col>
            <Col>
              <VideoWrapper>{renderSwitchVideo(chosenVideo)}</VideoWrapper>
            </Col>
          </Row>
        </Container>
      </StyledBackground>
    </div>
  )
}

export default Offers
