import styled from "styled-components";
import React from "react";
import Position from "../Position";

const Container = styled.div `
display:flex;
flex-direction:row;
width:100%;
height:100%;
align-items:center;
justify-content:center;

@media only screen and (max-width: 600px) {
    flex-direction:column;
  }
  
  @media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  }
`

const HolderLeft = styled.div `
flex:2;
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
`

const ProjectHolder = styled.div `
width:90%;

@media only screen and (max-width: 600px) {
    display:flex;
    flex-direction:column;
  }
  
  @media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  }
`

const HolderRight = styled.div `
flex:1;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`
const InfoHolder = styled.div `
width:90%;
`

const Deliverable = styled.div `
display:flex;
flex-direction:column;

`

const Team = styled.div `
display:flex;
flex-direction:column;
`

const ProjectHeader = styled.h1 `
font-family:textlighttwo;
`

const ProjectText = styled.p `
font-size:18px;
line-height:40px;
`

const HeadingText = styled.h3`
font-family:textlighttwo;
`

const BodyText = styled.p `
line-height:25px;
width:300px;
`

// margin-top:-160px;
const ProjectDeliverable = ({
    projecttext="Founded in 1988, the Tiny Paws is the longest-standing animal welfare organization in Vancouver and the region that rescues, rehabilitates and rehomes the largest number and species of animals in Vancouver.",
    delivetext="Wordpress, Figma",
    teamtext="Kelly Menzul, Daswon Gosse, Joyce Chan"
}) => {
    return <Container>

        <HolderLeft>
            <ProjectHolder>
                <ProjectHeader>PROJECT</ProjectHeader>
                <ProjectText>{projecttext}</ProjectText>
            </ProjectHolder>
        </HolderLeft>

        <HolderRight>
            <InfoHolder>
                <Deliverable>
                    <HeadingText>DELIVERABLES</HeadingText>
                    <BodyText>{delivetext}</BodyText>
                </Deliverable>
                <Team>
                    <HeadingText>TEAM</HeadingText>
                    <BodyText>{teamtext}</BodyText>
                </Team>
            </InfoHolder>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;