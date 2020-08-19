import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Videos from "../videos/videos"

const Portfolio = () => {
    return (
        <Container fluid>
            <Row>
                <Videos/>
            </Row>
        </Container>
    );
};

export default Portfolio;