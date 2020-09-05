// Normally you would import these like `import React, { Component } from 'react';`
import React, { Component } from "react"
import Shuffle from "shufflejs"
import ReactDOM from "react-dom"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Video from "./video/video.js"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const Background = styled.div`
  background-color: #1f2021;
  min-height: 400px;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 100;
  color: white;
  & a {
    &:hover {
      text-decoration: none;
    }
  }
`

const SelectMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`

const SelectButton = styled.button`
  margin: 5px;
  padding: 3px 15px;
  font-size: 16px;
  color: ${({isSelected}) => isSelected ? "#F7E625" : "#898989"};
  transition-duration: 0.4s;
  border-radius: 15px;
  border: ${({isSelected}) => isSelected ? " #F7E625 2px solid" : "transparent 2px solid"};
  font-weight: 700;
  &:hover {
    color: #f7e625;
  }
  &:focus {
    outline: 0;
  }
  outline: 0;
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

class Videos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idActiveTab: 0,
    }

    this.element = React.createRef()
    this.sizer = React.createRef()
  }

  componentDidMount() {
    // The elements are in the DOM, initialize a shuffle instance.
    this.shuffle = new Shuffle(this.element.current, {
      itemSelector: ".photo-item",
      sizer: this.sizer.current,
    })
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems()
    console.log("component updated")
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy()
    this.shuffle = null
  }

  handleFilterAll = () => {
    this.setState({ idActiveTab: 0 }, () => {
      this.shuffle.filter(element => {
        return element.dataset.groups.includes("wszystko")
      })
    })
  }

  handleFilterMusicClips = () => {
    this.setState({ idActiveTab: 1 }, () => {
      this.shuffle.filter(element => {
        return element.dataset.groups.includes("reklama")
      })
    })
  }

  render() {
    const { data } = this.props
    const {
      allStrapiVideos: { nodes: videos },
    } = data

    return (
      <Background>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Container>
              <Row>
                <Col>
                  <Heading>Portfolio</Heading>
                  <Description>nasze wybrane projekty</Description>
                </Col>
              </Row>
              <SelectMenuWrapper>
                <SelectButton
                  onClick={this.handleFilterAll}
                  isSelected={this.state.idActiveTab === 0}
                >
                  Wszystko
                </SelectButton>
                <SelectButton
                  onClick={this.handleFilterMusicClips}
                  isSelected={this.state.idActiveTab === 1}
                >
                  Teledyski
                </SelectButton>
                <SelectButton
                  onClick={this.handleFilterMusicClips}
                  isSelected={this.state.idActiveTab === 2}
                >
                  Eventy
                </SelectButton>
                <SelectButton
                  onClick={this.handleFilterMusicClips}
                  isSelected={this.state.idActiveTab === 3}
                >
                  Dokument
                </SelectButton>

                <SelectButton
                  onClick={this.handleFilterMusicClips}
                  isSelected={this.state.idActiveTab === 4}
                >
                  Promocje
                </SelectButton>
              </SelectMenuWrapper>
            </Container>
          </Row>

          <div ref={this.element} style={{ display: "flex" }}>
            {videos.map((video, index) => {
              return <Video key={index} video={video} ref={this.sizer} />
            })}
          </div>
        </Container>
      </Background>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allStrapiVideos(sort: { order: ASC, fields: position___numer }) {
          nodes {
            description
            id
            strapiId
            title
            youtube_link
            categories {
              name
              id
            }
            photo {
              relativePath
              publicURL
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position {
              numer
            }
          }
        }
      }
    `}
    render={data => <Videos data={data} {...props} />}
  />
)
