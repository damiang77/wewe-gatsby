import React, { useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos/videos"
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "../components/menu"
import About from "../components/about"
import HeroVideo from "../components/HeroVideo/heroVideo"
import Companies from "../components/companies"
import Offers from "../components/offers/offers"
import HowWeWork from "../components/howWeWork/howWeWork"
import WorkSteps from "../components/WorkSteps/WorkSteps"
import MessageModal from "../components/messageModal"
import VideoPlayer from "../components/videoPlayer"
import TeamComponent from "../components/team/TeamComponent"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"

const IndexPage = () => {
  useEffect(() => {}, [])

  return (
    <Layout>
      <VideoPlayer/>
      <HeroVideo />
      <About />
      <Companies />
      <Offers/>
      <Videos />
      <WorkSteps/>
      <TeamComponent/>
      <ContactForm/>
    </Layout>
  )
}

export default IndexPage

/*

font-family: 'Lato', sans-serif;
font-family: 'Righteous', cursive;

*/
