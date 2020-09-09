import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import SingleColumn from "./singleColumn"

const HowWeWorkContent = () => {
    const data = useStaticQuery(graphql`
    {
      allStrapiHowWeWorks {
        nodes {
          number
          header
          description
        }
      }
    }
  `)
  const {
    allStrapiHowWeWorks: { nodes: columns },
  } = data
  

    return (
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}> 
            <Row className="no-gutters">
                {columns.map((item)=>{
                    return <SingleColumn data={item}/>
                })}
            </Row>
        </Container>
    );
};

export default HowWeWorkContent;