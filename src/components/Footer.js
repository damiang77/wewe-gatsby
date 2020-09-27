import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import fb from "../images/fb.svg"
import instagram from "../images/in.svg"
import YouTube from "../images/yt.svg"
import logo from "../images/logo.png"

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  margin-left: 20px;
`

const Social = styled.img`
  flex: none;
  transition: fill 0.25s;
  width: 18px;
  height: 18px;
    fill: red;
  &:hover {
    cursor: pointer;
    fill: red;
  }
`


const Background = styled.div`
  background: #393939;
  padding-top:20px;
  padding-bottom: 20px;
  color: grey;
  width: 100%;
  text-align: center;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.img`
margin-left: 10px;
  width: 50px;
  height: 14px;
`
const Footer = () => {
  return (
    <Container fluid>
      <Row>

          <Background>
            © 2020 <Logo src={logo}/>
            <SocialWrapper>
              <Social src={fb} alt="Facebook" />
              <Social src={instagram} alt="Instagran" />
              <Social src={YouTube} alt="YouTube" />
            </SocialWrapper>
          </Background>
       
      </Row>
    </Container>
  )
}

export default Footer
