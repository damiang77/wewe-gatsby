/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

import React from "react"
import { MessageContextProvider } from "./src/context/messageContext"
import { VideoPlayerContextProvider } from "./src/context/VideoPlayerContext"
export const wrapRootElement = ({ element }) => (
  <MessageContextProvider>
    <VideoPlayerContextProvider>{element}</VideoPlayerContextProvider>
  </MessageContextProvider>
)
