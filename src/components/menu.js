import React, { useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import InstagramIcon from "../components/icons/instagramIcon"
import FbIcon from "../components/icons/fbIcon"
import YtIcon from "../components/icons/ytIcon"
import fb from "../images/fb.svg"
import instagram from "../images/in.svg"
import YouTube from "../images/yt.svg"
import MessageContext from "../context/messageContext"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
  min-width: 380px;
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
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #f7e625;
    }
  }
`
const MenuItemDropdown = styled(MenuItem)`
  position: relative;
  &:after {
    position: absolute;
    top: 24px;
    right: -14px;
    content: "";
    border: solid #898989;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  &:hover {
    > div {
      display: block;
    }
  }
  &:hover:after {
    border: solid #f7e625;
    border-width: 0 2px 2px 0;
  }
`
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const StyledLi = styled.li`
  padding: 5px 10px 5px 15px;

  & > a {
    color: #898989;
    font-size: 14px;
    font-weight: 700;
  }
  &:hover a {
    text-decoration: none;
    color: #f7e625;
    cursor: pointer;
  }
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  padding: 10px 0 10px 0;
  bottom: 0;
  left: 40px;
  transform: translate(-50%, 98%);
  background-color: #393939;
  width: 200px;
  min-height: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  z-index: 1;
`

const RightMenu = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const Logo = styled.img`
  width: 100px;
  height: 28px;
`
const Social = styled.img`
  flex: none;
  transition: fill 0.25s;
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
    fill: red;
  }
`

const ContactButton = styled.button`
  border-radius: 30px;
  padding: 3px 15px;
  border: 2px #f7e625 solid;
  cursor: pointer;
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? "black" : "#f7e625")};
  background: ${({ isActive }) => (isActive ? "#f7e625" : "transparent")};
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

const Menu = () => {
  const message = useContext(MessageContext)

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
                <AnchorLink to="/#onas">
                  O nas
                </AnchorLink>
              </MenuItem>
              <MenuItemDropdown>
              <AnchorLink to="/#oferta">
                  Oferta
                </AnchorLink>
                <DropDownContent>
                  <StyledUl>
                    <StyledLi>
                      <Link to="/plany-filmowe" activeClassName="activelink">
                        Organizacja planów filmowych i zdjęciowych
                      </Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Animacja 2D i ilustracje</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Storyboardy</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Fotografia</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Animacje 3D i CGI</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Social Media Content</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Live stream</Link>
                    </StyledLi>
                    <StyledLi>
                      <Link to="/">Ujęcia z drona</Link>
                    </StyledLi>
                  </StyledUl>
                </DropDownContent>
              </MenuItemDropdown>
              <MenuItem>
              <AnchorLink to="/#portfolio">
                  Portfolio
                </AnchorLink>
              </MenuItem>
              <MenuItem>
              <AnchorLink to="/#kontakt">
                  Kontakt
                </AnchorLink>
              </MenuItem>
            </MenuItems>
            <RightMenu>
              <ContactButton
                onClick={message.toggleMessageBox}
                isActive={message.isOpen}
              >
                Wiadomość
              </ContactButton>
              <SocialWrapper>
                <FbIcon className="social-icon" />
                <InstagramIcon className="social-icon" />
                <YtIcon className="social-icon" />
              </SocialWrapper>
            </RightMenu>
          </Navigation>
        </NavigationWrapper>
      </Row>
    </Container>
  )
}

export default Menu
