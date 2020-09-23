import React from "react"
import styled from "styled-components"
import { Col } from "react-bootstrap"

const CustomCol = styled(Col)`
  display: flex;
  margin-bottom: 25px;
`
const NumberContainer = styled.div`
  width: 50px;
  text-align: center;
  color: #626366;
  font-size: 12px;
`
const NumberCircle = styled.div`
  background: #f7e625;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 10px;
  color: #1f2021;
`
const DescriptionContainer = styled.div`
  margin-left: 30px;
  width: 100%;
  min-height: 100px;
  background: #2b2d2d;
  border-radius: 5px;
  padding: 22px;
  padding-left: 45px;
  padding-right: 45px;
`
const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-bottom: 15px;
`
const Description = styled.div`
  font-size: 16px;
  margin-bottom:10px;
  color: #a1a1a6;
`

const WorkStep = props => {
  const { number, header, description } = props.data
  return (
    <CustomCol xl={8}>
      <NumberContainer>
        <NumberCircle>{number}</NumberCircle>
        KROK
      </NumberContainer>
      <DescriptionContainer>
        <Header>{header}</Header>
        <Description>{description}</Description>
      </DescriptionContainer>
    </CustomCol>
  )
}

export default WorkStep
