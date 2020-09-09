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
import HeroVideo from "../components/HeroVideo/HeroVideo"
import Companies from "../components/companies"
import Offers from "../components/offers/offers"
import HowWeWork from "../components/howWeWork/howWeWork"
import MessageModal from "../components/messageModal"
import VideoPlayer from "../components/videoPlayer"
import TeamComponent from "../components/team/TeamComponent"

const IndexPage = () => {
  useEffect(() => {}, [])

  return (
    <>
      <Menu />
      <MessageModal/>
      <VideoPlayer/>
      <HeroVideo />
      <About />
      <Companies />
      <Offers/>
      <Videos />
      <HowWeWork/>
      <TeamComponent/>
    </>
  )
}

export default IndexPage

/*

font-family: 'Lato', sans-serif;
font-family: 'Righteous', cursive;

*/
