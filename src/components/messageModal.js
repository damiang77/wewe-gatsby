import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import BlurredBackground from "./blurredBackground"
import MessageContext from "../context/messageContext"

const ContactBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`
const ContactForm = styled.form`
  width: 50%;
  min-height: 400px;
  background: #1f2021;
  position: relative;
  z-index: 1002;
  display: flex;
  border-radius: 15px;
  padding: 25px;
  color: #fff;
  transition: transform 0.9s cubic-bezier(.93,-0.38,0,1.47);
  transform: translateY(${({ isVisible }) => (isVisible ? "0px" : "-600px")});
`
const CloseForm = styled.div`
  position: absolute;
  right: 20px;
  top: 7px;
  color: #f7e625;
  font-size: 20px;
  font-family: "Righteous", cursive;
  font-weight: 700;
  cursor: pointer;
`
const RowWrapper = styled.div`
padding-bottom:15px;
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

const Header = styled.h2`
  font-size: 32px;
  font-family: "Righteous", cursive;
  font-weight: 700;
  margin-bottom: 30px;
`

const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.5;
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
const InputCheckBox = styled.input`
  position: relative;
  margin-right: 8px;
  margin: 5px;
  padding: 0px;
  top: 5px;
  outline: 2px solid #f7e625;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  box-shadow: none;
  transition: all 0.3s ease;
  &:checked {
    background: #f7e625;
    outline: 2px solid transparent;
  }
`

const MessageModal = props => {
  const message = useContext(MessageContext)
  const [termsAccepted, setTermsAccepted] = useState(false)

  return (
    <>
      <BlurredBackground isVisible={message.isOpen}>
        <ContactBoxWrapper onClick={message.toggleMessageBox} />
        <ContactForm isVisible={message.isOpen}>
          <CloseForm onClick={message.toggleMessageBox}>X</CloseForm>
          <div>
            <Header> Wyślij nam wiadomość</Header>
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
            <RowWrapper >
              <Label for="message">Wiadomość</Label>
              <TextArea
                rows="4"
                cols="50"
                className="form-control"
                id="message"
                name="message"
                placeholder="Wiadomość..."
                tabindex="4"
                required
              ></TextArea>
            </RowWrapper>
            <div>
              <Paragraph>
                <InputCheckBox
                  type="checkbox"
                  required
                  name="terms"
                  value={termsAccepted}
                  onClick={() => setTermsAccepted(!termsAccepted)}
                />
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą
                o ochronie danych osobowych w związku z wysłaniem zapytania
                przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
                niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
                przysługuje mi prawo dostępu do swoich danych, możliwości ich
                poprawiania, żądania zaprzestania ich przetwarzania.
                Administratorem danych osobowych jest d4 studio z siedzibą w
                Wołowie.
              </Paragraph>
            </div>
            <div className="text-center">
              <ContactButton type="submit" disabled={!termsAccepted}>
                Wyślij wiadomość
              </ContactButton>
            </div>
          </div>
        </ContactForm>
      </BlurredBackground>
    </>
  )
}

export default MessageModal
