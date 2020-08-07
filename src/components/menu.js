import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import fb from "../images/fb.svg"
import instagram from "../images/in.svg"
import youtube from "../images/yt.svg"

const NavigationWrapper = styled.nav`
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #393939;
  box-shadow: 0 15px 50px rgba(2, 3, 3, 0.1);
`

const Navigation = styled.div`
  width: 1200px;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #898989;
`
const LogoWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`
const MenuItems = styled.ul`
  width: 320px;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  list-style-type: none;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0;
  & > a {
    color: #898989;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: #f7e625;
    }
  }
`
const RightMenu = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const Logo = styled.img`
  margin-top: 24px;
  width: 100px;
  height: 28px;
`
const Social = styled.img`
  margin-top: 24px;
  width: 24px;
  height: 24px;
  &:hover {
    path {
      fill: #f7e625;
    }
  }
`
const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`

const ContactButton = styled.button`
  border-radius: 30px;
  padding: 3px 15px;
  border: 2px #f7e625 solid;
  cursor: pointer;
  font-size: 12px;
  color: #f7e625;
  background: transparent;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px transparent solid;
    background: #f7e625;
    color: #212529;
  }
`
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 120px;
  margin-left: 20px;
`

const menu = () => {
  return (
    <Container fluid>
      <Row>
        <NavigationWrapper>
          <Navigation>
            <LogoWrapper>
              <Link to="/">
                <Logo src={logo} alt="Logo wewe" />
              </Link>
            </LogoWrapper>
            <MenuItems>
              <MenuItem>
                <Link to="">O nas</Link>
              </MenuItem>
              <MenuItem>
                <Link to="">Oferta</Link>
              </MenuItem>
              <MenuItem>
                <Link to="">Portfolio</Link>
              </MenuItem>
              <MenuItem>
                <Link to="">Kontakt</Link>
              </MenuItem>
            </MenuItems>
            <RightMenu>
              <ContactButton>Wiadomość</ContactButton>
              <SocialWrapper>
                <Social src={fb} alt="Facebook" />
                <Social src={instagram} alt="Instagran" />
                <Social src={youtube} alt="YouTube" />
              </SocialWrapper>
            </RightMenu>
          </Navigation>
        </NavigationWrapper>
      </Row>
    </Container>
  )
}

export default menu
