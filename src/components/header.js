import React from "react"
import styled from "styled-components"

const HeaderText = styled.h1`
font-family: 'Righteous', cursive;
background: rgba(255,255,255, 0.05);
font-size: 48px;
height: 120px;
line-height: 120px;
color: #fff;
font-weight: 400;
padding-left: 50px;
position: relative;
&:before{
  position: absolute;
  content: '';
  width: 15px;
  height: 120px;
  left: 0px;
  top: 0px;
  background: #F7E625;
}
`

const Header = ({ siteTitle }) => (
 <HeaderText>
   {siteTitle}
 </HeaderText>
)

export default Header
