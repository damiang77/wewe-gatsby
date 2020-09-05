import React from "react"
import styled from "styled-components"
import { Col } from "react-bootstrap"

const ColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 8rem 2rem 8rem 2rem;
`

const Index = styled.h2`
font-family: 'Righteous', cursive;
text-shadow: 0 3px 6px rgba(0,0,0,.46);
font-weight: 700;
font-size: 24px;
margin-bottom:10px;
`
const Header = styled.h3`
font-family: 'Righteous', cursive;
text-shadow: 0 3px 6px rgba(0,0,0,.46);
font-size: 30px;
font-weight: 700;
min-height: 120px;
`
const Description = styled.p`
font-family: 'Lato', sans-serif;
font-size: 16px;
font-weight:400;
`

const CustomCol = styled(Col)`
&:nth-child(1){
    background: rgba(166, 166, 166, 0.7)
}
&:nth-child(2){
    background: rgba(73, 88, 107, 0.7)
}
&:nth-child(3){
    background: rgba(145, 166, 175, 0.7)
}
&:nth-child(4){
    background: rgba(90, 113, 123, 0.7)
}
&:nth-child(5){
    background: rgba(45, 57, 62, 0.7)
}
&:nth-child(6){
    background: rgba(27, 35, 39, 0.7)
}


`


const SingleColumn = props => {
  const { number, header, description } = props.data
  return (
    <CustomCol>
      <ColumnWrapper>

        <Index>{number}</Index>
        <Header>{header}</Header>
        <Description>{description}</Description>
      </ColumnWrapper>
    </CustomCol>
  )
}

export default SingleColumn
