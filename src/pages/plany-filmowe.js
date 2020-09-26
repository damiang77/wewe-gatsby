import React, { useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Menu from "../components/menu"
import MessageModal from "../components/messageModal"

import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const IndexPage = () => {
  useEffect(() => {}, [])

  return (
    <>
      <Menu />
      <MessageModal/>
     
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default IndexPage

/*

font-family: 'Lato', sans-serif;
font-family: 'Righteous', cursive;

*/
