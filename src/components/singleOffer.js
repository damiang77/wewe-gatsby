import React from 'react';
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Header from "./header"
import ResponsivePlayer from "./responsivePlayer"
import after from "../images/about-after.png"

const ContainerFluid = styled(Container)`
  background: #1b1b1b;
  position: relative;
  padding-top: ${({padding}) => padding ? "100px" : "0px"};
`

const CustomContainer = styled(Container)`
  position: relative;
  background: #1b1b1b;
  &:before {
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    margin: 0 auto;
    content: "";
    width: 1300px;
    height: 120%;
    background: black;
  }
`

const PlayerWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  z-index: 2;
  position: relative;
`

const RowMargin = styled(Row)`
  margin-top: 5rem;
`

const MainTextHeader = styled.h2`
  font-family: "Righteous", cursive;
  padding: 10px;
  margin-top: 1rem;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  color: #ffffff;
position: relative;
  &:after{
    position: absolute;
    content: '';
    width: 100px;
    height: 5px;
    bottom: -10px;
    left:0;
    right: 0;
    margin: 0 auto;
    background: #f7e625;
  }
`
const Colored = styled.span`
  color: #f7e625;
`
const MainTextDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  padding: 15px;
  padding-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #bdbdbd;
`
const ImgCustom = styled(Img)`
  position: relative;
  z-index: 2;
`
const ImgWrapper = styled.div`
  position: relative;
  &:after {
    content: url(${after});
    position: absolute;
    bottom: -60px;
    left: -20px;
    z-index: 1;
  }
`

const TextDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #bdbdbd;
  margin-bottom: 70px;
`

const SingleOffer = (props) => {
    const {header, youtube, fluid, header2, description, description2 } = props;

    return (
        <>
        <ContainerFluid fluid padding>
        <Row>
          <Container>
            <Row>
              <Col>
                <Header siteTitle={header} />
              </Col>
            </Row>
          </Container>
        </Row>
      </ContainerFluid>
      <ContainerFluid fluid>
        <Row>
          <Container>
            <Row>
              <Col>
                <PlayerWrapper>
                  <ResponsivePlayer id={youtube}/>
                </PlayerWrapper>
              </Col>
            </Row>
          </Container>
        </Row>
      </ContainerFluid>
      <CustomContainer fluid>
        <Row>
          <Container>
            <RowMargin>
              <Col xl={6}>
                <ImgWrapper>
                  <ImgCustom
                    fluid={fluid}
                    alt={header2}
                  />
                </ImgWrapper>
              </Col>
              <Col xl={6}>
                <MainTextHeader>
                  {header2}
                  <Colored>.</Colored>
                </MainTextHeader>
                <MainTextDescription>{description}</MainTextDescription>
              </Col>
            </RowMargin>
            {description2 && (
              <RowMargin>
                <Col>
                  <TextDescription>{description2}</TextDescription>
                </Col>
              </RowMargin>
            )}
          </Container>
        </Row>
      </CustomContainer>
      </>
    );
};

export default SingleOffer;