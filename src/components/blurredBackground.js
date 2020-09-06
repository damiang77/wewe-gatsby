import React, {useEffect} from "react"
import styled from "styled-components"

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
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`
/*
Component with Blurred background. Scrolling is turned off when background is visible.
Params:
isVisible = true/false

*/

const BlurredBackground = props => {
  const isVisible = props.isVisible
  const toggle = props.toggleModal
  const html = document.querySelector('html')
  useEffect(() => {
    isVisible ? (html.style.overflow = 'hidden') : (html.style.overflow = 'unset');
      return ()=> html.style.overflow = 'unset';
   }, [isVisible]);

   const clicked = () => {
    if(toggle){
      toggle();
    }
   }
  return <BlurredBg isVisible={isVisible} onClick={clicked}>{props.children}</BlurredBg>
}

export default BlurredBackground
