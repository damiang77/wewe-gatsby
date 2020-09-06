import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import BlurredBackground from "./blurredBackground"
import MessageContext from "../context/messageContext"

const ContactBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1099;
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
  z-index: 1000;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  border-radius: 15px;
  padding: 25px;
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
const Input = styled.input`
  background: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding: 3px 15px 3px 15px;
  color: #fff;
  &:focus {
    background: transparent;
  }
`
const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding: 3px 5px 3px 5px;
  color: #fff;
  &:focus {
    background: transparent;
  }
`

const MessageModal = props => {
  const message = useContext(MessageContext)

  return (
    <>
      <BlurredBackground isVisible={message.isOpen} toggleModal={message.toggleMessageBox}/>
      <ContactBoxWrapper>
        <ContactForm isVisible={message.isOpen}>
          <CloseForm onClick={message.toggleMessageBox}>X</CloseForm>
          <div>
            <h2> Wyślij nam wiadomość</h2>
            <div className="form-group">
              <label className="form-label" for="name">
                Imię i nazwisko
              </label>
              <Input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Imię i naziwsko"
                tabindex="1"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="email">
                E-mail
              </label>
              <Input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Twój e-mail"
                tabindex="2"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" for="message">
                Wiadomość
              </label>
              <TextArea
                rows="5"
                cols="50"
                className="form-control"
                id="msg"
                name="msg"
                placeholder="Wiadomość..."
                tabindex="4"
                required
              ></TextArea>
            </div>
            <div className="form-group">
              <p>
                <input type="checkbox" required name="terms" />
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą
                o ochronie danych osobowych w związku z wysłaniem zapytania
                przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
                niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
                przysługuje mi prawo dostępu do swoich danych, możliwości ich
                poprawiania, żądania zaprzestania ich przetwarzania.
                Administratorem danych osobowych jest d4 studio z siedzibą w
                Wołowie.
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="button-main">
                Wyślij wiadomość
              </button>
            </div>
          </div>
        </ContactForm>
      </ContactBoxWrapper>
    </>
  )
}

export default MessageModal
