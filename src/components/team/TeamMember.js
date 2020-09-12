import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"

const CustomImg = styled(Img)`
width:100%;
height:auto;
`

const Heading = styled.h3`
font-family: 'Lato', sans-serif;
color: white;
font-size:18px;
font-weight: 700;
margin-top: 12px;

`

const Job = styled.h2`
margin-top: 10px;
font-family: 'Lato', sans-serif;
color: #BBBBBB;
font-size: 12px;
position: relative;
&:after{
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0px;
    width: 20px;
    height: 3px;
    background: yellow;

}

`

const Skill = styled.li`
font-family: 'Lato', sans-serif;
color: #BBBBBB;
font-size: 14px;
`

const Space = styled.span`

`

const TeamMember = (props) => {
    const {name, job, skills, photo} = props.info;

    return (
        <div>
            <CustomImg fluid={photo}/>
            <Heading>{name}</Heading>
            <Job>{job}</Job>
           {/* <ul>
                {skills.map((skill)=>{
                    return <Skill>{skill}</Skill>
                })} 
            </ul> */}
        </div>
    );
};

export default TeamMember;