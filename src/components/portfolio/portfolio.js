import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Videos from "../videos/videos"
import PortfolioGrid from "./PortfolioGrid";

const Portfolio = () => {
    return (
        <>
  
                <PortfolioGrid/>
                
        </>
    );
};

export default Portfolio;