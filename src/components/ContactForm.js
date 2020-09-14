import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import MsgImg from "../images/msg.jpg"

const ContainerBackground = styled.div`
  background: #1B1B1B;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  color: #ffffff;
`



const CustomRow = styled(Row)`
padding-top: 4rem;
`

const LinkRow = styled.div`
font-size: 24px;
display:block;
&:first-of-type{
margin-bottom: 80px;
}
`
const Link = styled.a`

color: #fff;
font-size: 24px;
font-weight: 700;
&:hover{
    color: #f7e625;
    text-decoration: none;
}
`

const ColBackground = styled.div`
background: url(${MsgImg});
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
  background-position: center center;
  background-size: cover;
  margin:0;
  padding-left:0;
  padding-right: 0;
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

const RowWrapper = styled.div`
  padding-bottom: 15px;
`
const Label = styled.label`
  font-size: 12px;
  color: #fff;
`
const Input = styled.input`
  background: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding: 3px 15px 3px 15px;
  font-size: 14px;
  color: #fff;
  &:focus {
    background: transparent;
    color: #fff;
  }
`
const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding: 3px 5px 3px 15px;
  font-size: 14px;
  color: #fff;
  &:focus {
    background: transparent;
    color: #fff;
  }
`
const ContactButton = styled.button`
  border-radius: 30px;
  padding: 3px 15px;
  border: 2px #f7e625 solid;
  color: #f7e625;
  cursor: pointer;
  font-size: 16px;
  color: "#f7e625";
  background: "transparent";
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px transparent solid;
    background: #f7e625;
    color: #212529;
  }
  &:disabled {
    border: 2px grey solid;
    cursor: not-allowed;
    &:hover {
      border: 2px grey solid;
      background: transparent;
      color: #fff;
    }
  }
`

const ContactForm = () => {

  return (
    <Container fluid>
      <Row>
        <ContainerBackground>
          <Container>
            <Row>
              <Col>
                <Heading>Kontakt</Heading>
                <Description>Skontakuj się z nami</Description>
              </Col>
            </Row>
            <CustomRow>
              <Col>
              <ColBackground>
            <div className="text-center">
                <LinkRow>
                E-mail: <Link href="mailto:biuro@wewe.pl">biuro@wewe.pl</Link>
                </LinkRow>
       
              <LinkRow>
              Telefon: <Link href="tel:+48506312321">+48 506 312 321</Link>
              </LinkRow>
            </div>
              
            </ColBackground>
              </Col>
              <Col>
                <form>
                  <RowWrapper>
                    <Label for="name">Imię</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Podaj imię"
                      tabindex="1"
                      required
                    />
                  </RowWrapper>
                  <RowWrapper>
                    <Label for="email">E-mail</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Podaj swój e-mail. Na ten adres wyślemy odpowiedź."
                      tabindex="2"
                      required
                    />
                  </RowWrapper>
                  <RowWrapper>
                    <Label for="message">Wiadomość</Label>
                    <TextArea
                      rows="5"
                      cols="50"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Wiadomość..."
                      tabindex="4"
                      required
                    ></TextArea>
                  </RowWrapper>

                  <div className="text-center">
                    <ContactButton type="submit">
                      Wyślij wiadomość
                    </ContactButton>
                  </div>
                </form>
              </Col>
            </CustomRow>
          </Container>
        </ContainerBackground>
      </Row>
    </Container>
  )
}

export default ContactForm
