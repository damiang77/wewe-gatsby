import React, { useState } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ContainerBackground = styled.div`
  background: #1b1b1b;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  color: #ffffff;
`

const CustomRow = styled(Row)`
  padding-top: 4rem;
`

const Link = styled.a`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  &:hover {
    color: #f7e625;
    text-decoration: none;
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
const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #495057;
  text-align: justify;
`
const InputCheckBox = styled.input`
  position: relative;
  bottom: -4px;
  margin: 2px;
  margin-right: 5px;
  padding: 0px;
  outline: 2px solid #f7e625;
  width: 12px;
  height: 12px;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  &:focus {
    outline-offset: 0px;
  }
  &:checked {
    background: #f7e625;
    outline: 2px solid transparent;
  }
`

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query Images2 {
      image: file(relativePath: { eq: "team2.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [termsAccepted, setTermsAccepted] = useState(false)
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
                <Img
                  fluid={data.image.childImageSharp.fluid}
                  alt="wewe team contact"
                />
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
                  <Paragraph>
                    <InputCheckBox
                      type="checkbox"
                      required
                      name="terms"
                      value={termsAccepted}
                      onClick={() => setTermsAccepted(!termsAccepted)}
                    />
                    Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                    ustawą o ochronie danych osobowych w związku z wysłaniem
                    zapytania przez formularz kontaktowy. Podanie danych jest
                    dobrowolne, ale niezbędne do przetworzenia zapytania.
                    Zostałem poinformowany, że przysługuje mi prawo dostępu do
                    swoich danych, możliwości ich poprawiania, żądania
                    zaprzestania ich przetwarzania. Administratorem danych
                    osobowych jest wewe films.
                  </Paragraph>

                  <div className="text-center">
                    <ContactButton type="submit" disabled={!termsAccepted}>
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
