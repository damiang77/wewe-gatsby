import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import c1 from "../images/1.png"
import c2 from "../images/2.png"
import c3 from "../images/3.png"
import c4 from "../images/4.png"
import c5 from "../images/5.png"
import c6 from "../images/6.png"
import c7 from "../images/7.png"
import c8 from "../images/8.png"
import c9 from "../images/9.png"
const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
    padding-top: 10rem;
    padding-bottom: 10rem;
    background: #393939;
  `
  const Heading = styled.h2`
    font-size: 24px;
    color: #fff;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    text-align: center;
  `
  const CompaniesWrapper = styled.div`
    margin-top: 4rem;
    width: 100%;
  `
  const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

const Companies = () => {
  

  return (
   <Container fluid>
     <Row>
     <SectionWrapper>
      <Container>
        <Row>
          <Col>
            <Heading>współpracowaliśmy z</Heading>
          </Col>
        </Row>
        <CompaniesWrapper>
          <div className="row justify-content-center">
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c1} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c2} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c3} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c4} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c5} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c6} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c7} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c8} alt="Applover" />
              </ImageWrapper>
            </Col>
            <Col lg="2" xs="4">
              <ImageWrapper>
                <img src={c9} alt="Applover" />
              </ImageWrapper>
            </Col>
          </div>
        </CompaniesWrapper>
      </Container>
    </SectionWrapper>
     </Row>
   </Container>
  )
}

export default Companies
