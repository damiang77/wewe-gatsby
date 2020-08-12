import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import StyledBackground from "./StyledBackground"

const Heading = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 48px;
  font-weight: 700;
  color: #FFF;
  margin-top:2rem;
  `
  const Description = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #FFF;
  margin: 0;
  margin-top: -10px;
  padding:0;
  `

const Button = styled.div`
  background: transparent;
  border: 0;
  border-left: ${props => props.active ? "4px solid yellow" : "4px solid transparent"};
  color: ${props => props.active ? "yellow" : "white"};
  margin: 1rem 0 1rem 0;
  &:first-child{
    margin-top:4rem;
  }
  &:hover{
    color: yellow;
  }
  padding: 10px 0px 10px 30px;
  width: 100%;
  cursor: pointer;
`;


const Offers = () => {

  const [value, setValue] = useState(0)
  
    return (
        <div>
            <StyledBackground>
              <Container>
                <Row>
                  <Col>
                  <Heading>Oferta</Heading>
                  <Description>w tym się specjalizujemy</Description>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <Button onClick={()=> setValue(0)} active={value === 0} >Organizacja planów filmowych i zdjęciowych</Button>
                    <Button onClick={()=> setValue(1)} active={value === 1} >Animacja 2D i ilustracje</Button>
                    <Button onClick={()=> setValue(2)} active={value === 2} >Storyboardy</Button>
                  </Col>
                  <Col >
                    {value}
                  </Col>
                </Row>
              </Container>
            </StyledBackground>
        </div>
    );
};

export default Offers;