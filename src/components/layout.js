/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Menu from "./menu"
import MessageModal from "./messageModal"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <MessageModal />
      {children}
      <Footer />
    </>
  )
}

export default Layout
