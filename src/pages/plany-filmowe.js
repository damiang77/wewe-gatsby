import React from "react"
import { Container, Row} from "react-bootstrap"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
import SingleOffer from "../components/singleOffer"

const ContainerFluid = styled(Container)`
  background: #1b1b1b;
  position: relative;
  padding-top: ${({ padding }) => (padding ? "100px" : "0px")};
`

const IndexPage = ({ data }) => {
  const {
    allStrapiOrganizacjaPlanow: { nodes },
  } = data

  const content = nodes[0]
console.log(content)
  return (
    <Layout>
      <SEO
        title={content.seo_sitetitle}
        description={content.seo_sitedescription}
      />
      <SingleOffer
        header={content.header}
        youtube={content.youtube}
        fluid={content.photo.childImageSharp.fluid}
        header2={content.header2}
        description={content.description}
        description2={content.description2}
      />
      <ContainerFluid fluid>
        <Row>
          <ContactForm />
        </Row>
      </ContainerFluid>
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allStrapiOrganizacjaPlanow {
          nodes {
            id
            header2
            header
            description
            description2
            seo_sitetitle
            seo_sitedescription
            youtube
            photo {
              relativePath
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)
