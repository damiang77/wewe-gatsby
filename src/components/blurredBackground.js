import React, {useEffect} from "react"
import styled from "styled-components"

const BlurredBgWrapper = styled.div`
 position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`
const BlurredBg = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);  
  overflow: hidden;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};

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