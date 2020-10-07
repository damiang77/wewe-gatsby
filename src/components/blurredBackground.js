import React, {useEffect} from "react"
import styled from "styled-components"

const BlurredBgWrapper = styled.div`
 position: fixed;
  z-index: 999;
  top: ${({ isVisible }) => (isVisible ? "0" : "-1000px")};
  bottom: ${({ isVisible }) => (isVisible ? "0" : "-1000px")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  right: 0;
  left: 0;
  transition: all 1s ease;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlurredBg = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: ${({ isVisible }) => (isVisible ? "0" : "-1000px")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: all 0.6s ease;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);  

  overflow: hidden;
  display: flex;

`
/*
Component with Blurred background. Scrolling is turned off when background is visible.
Params:
isVisible = true/false
*/

const BlurredBackground = props => {
  const isVisible = props.isVisible

  useEffect(() => {
    const html = document.querySelector('html')
    isVisible ? (html.style.overflow = 'hidden') : (html.style.overflow = 'unset');
      return ()=> html.style.overflow = 'unset';
   }, [isVisible]);


  return (
    <BlurredBgWrapper isVisible={isVisible}>
      <BlurredBg isVisible={isVisible}/>
      {props.children}
    </BlurredBgWrapper>
  )
}

export default BlurredBackground
