import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import fb from "../images/fb-white.svg"
import instagram from "../images/in-white.svg"
import YouTube from "../images/yt-white.svg"
import logo from "../images/logo.png"

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin-top: 20px;
`

const CustomContainer = styled(Container)`
  background: #090808;
`

const Social = styled.img`
  flex: none;
  transition: fill 0.25s;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`


const Logo = styled.img`
  width: 155px;
  display: block;
`
const CustomRow = styled(Row)`
  margin-top: 6rem;
  margin-bottom: 6rem;
`
const Address = styled.span`
  display: block;
  color: #fff;
  font-size: 18px;
  line-height: 1.8;
  margin-top: ${props => (props.margin ? "15px" : "0px")};
`
const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: ${props => (props.light ? "300" : "700")};
  letter-spacing: ${props => (props.light ? "3px" : "0")};
`

const MenuItem = styled.li`
  height: 100%;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  & > a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: #f7e625;
    }
  }
`

const SocialContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const BigText = styled.span`
text-align: center;
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  font-family: "Righteous", cursive;
`

const ExternalLink = styled.a`
margin-left: 5px;
    text-decoration: underline;
    color: grey;
    &:hover{
      text-decoration: none;
      color: #f7e625;
    }
`
const Background = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding-top: 8px;
  padding-bottom: 8px;
  color: grey;
  width: 100%;
  text-align: center;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return (
    <CustomContainer fluid>
      <Row>
        <Container>
          <CustomRow>
            <Col xl={3}>
              <Logo src={logo} />
              <Address margin>Powązkowska 59a</Address>
              <Address>01-728 Warszawa</Address>
            </Col>
            <Col xl={3}>
              <Menu light>
                <MenuItem>
                  <Link to="">O nas</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Portfolio</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Kontakt</Link>
                </MenuItem>
                <MenuItem>
                  <Link to=""></Link>
                </MenuItem>
              </Menu>
            </Col>
            <Col xl={3}>
              <Menu>
                <MenuItem>
                  <Link to="">Plany filmowe</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Animacja 2D i ilustracje</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Storyboardy</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Fotografia</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Animacje 3D i CGI</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Social Media Content</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Live stream</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="">Ujęcia z drona</Link>
                </MenuItem>
              </Menu>
            </Col>
            <Col xl={3}>
              <SocialContainer>
                <BigText>Śledź nas na</BigText>
                <SocialWrapper>
                  <Social src={fb} alt="Facebook" />
                  <Social src={instagram} alt="Instagran" />
                  <Social src={YouTube} alt="YouTube" />
                </SocialWrapper>
              </SocialContainer>
            </Col>
          </CustomRow>
        </Container>
      </Row>
      <Row>
        <Background>
        © 2020. wewe. All Rights Reserved. Design + code: <ExternalLink href="https://damiangarbera.pl" target="_blank">damiangarbera.pl</ExternalLink>
        </Background>
      </Row>
    </CustomContainer>
  )
}

export default Footer
