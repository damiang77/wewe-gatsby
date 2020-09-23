import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import WorkStep from "./WorkStep"
import styled from "styled-components"

const CustomContainer = styled(Col)`
  background-color: #1b1b1b;
  padding-top: 4rem;
  padding-bottom: 4rem;
`
const CustomRow = styled(Row)`
margin-top:4rem;
`
const Heading = styled.h2`
  font-family: "Righteous", cursive;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
`
const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin: 0;
  margin-top: -10px;
  padding: 0;
`

const WorkSteps = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiHowWeWorks {
        nodes {
          number
          header
          description
        }
      }
    }
  `)
  const {
    allStrapiHowWeWorks: { nodes: steps },
  } = data

  return (
    <CustomContainer fluid>
      <Row className="no-gutters">
        <Container>
          <Row>
            <Col>
              <Heading>Tak działamy</Heading>
              <Description>poznaj nasz proces</Description>
            </Col>
          </Row>
          <CustomRow className="justify-content-center">
            {steps.map(step => {
              return <WorkStep data={step} />
            })}
          </CustomRow>
        </Container>
      </Row>
    </CustomContainer>
  )
}

export default WorkSteps
