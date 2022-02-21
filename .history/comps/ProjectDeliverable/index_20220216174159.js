import styled from "styled-components";
import React from "react";
import Position from "../Position";
import AboutMeAccordion from "../AboutMeAccordion";

const Container = styled.div `
display:flex;
flex-direction:row;
width:100%;
height:100%;
align-items:center;
justify-content:center;
padding-top:50px;

@media only screen and (max-width: 600px) {
    flex-direction:column;
  }
  
  @media only screen and (min-device-width : 601px) and (max-device-width : 1024px){
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
width:100%;

@media only screen and (max-width: 600px) {
    display:flex;
    flex-direction:column;
  }
  
  @media only screen and (min-device-width : 601px) and (max-device-width : 1024px) and (orientation : portrait) {
  }
`

const HolderRight = styled.div `
flex:1;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;

@media only screen and (max-width: 600px) {
    display:none;
}

@media only screen and (min-device-width : 601px) and (max-device-width : 1024px) and (orientation : portrait) {
    display:none;
}
`
const InfoHolder = styled.div `
width:100%;
`

const Deliverable = styled.div `
display:flex;
flex-direction:column;
`

const HeadingText = styled.h3``

const Team = styled.div `
display:flex;
flex-direction:column;
`

const ProjectHeader = styled.h1 `
font-family:textlighttwo;
margin-bottom:-4px;
`

const ProjectText = styled.p `
font-size:18px;
line-height:40px;

@media only screen and (max-width: 600px) {
    font-size:16px;
    line-height:30px;
}

@media only screen and (min-device-width : 601px) and (max-device-width : 1024px) and (orientation : portrait) {
}
`

const BodyText = styled.p `
line-height:25px;
width:100%;

@media only screen and (max-width: 600px) {
    font-size:16px;
}

@media only screen and (min-device-width : 601px) and (max-device-width : 1024px) and (orientation : portrait) {
}
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