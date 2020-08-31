import React, { useEffect, createRef, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos/videos"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Menu from "../components/menu";
import About from "../components/about";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import Companies from "../components/companies";
import Offers from "../components/offers/offers";
import Portfolio from "../components/portfolio/portfolio"

const IndexPage = () => {
 

  useEffect(() => {
  
    
  }, [])

  return (
<>
  <Menu/>
  <HeroVideo/>
  <About/>
  <Companies/>
 <Videos/>

</>
  )
}

export default IndexPage;

/*

font-family: 'Lato', sans-serif;
font-family: 'Righteous', cursive;

*/