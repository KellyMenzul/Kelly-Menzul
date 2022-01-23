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
`

const HolderLeft = styled.div `
flex:2;
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
background-color:yellow;
`

const ProjectHolder = styled.div `
background-color:red;
width:50%;
`

const HolderRight = styled.div `
flex:1;
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
background-color:red;
`
const InfoHolder = styled.div `
background-color:red;
width:100%;
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

const ProjectText = styled.h3 `
`

const HeadingText = styled.h3`
font-family:textlighttwo;
`

const BodyText = styled.p ``

// margin-top:-160px;
const ProjectDeliverable = ({
}) => {
    return <Container>

        <HolderLeft>
            <ProjectHolder>
                <ProjectHeader>PROJECT</ProjectHeader>
                <ProjectText>Founded in 1988, the Tiny Paws is the longest-standing animal welfare organization in Vancouver and the region that rescues, rehabilitates and rehomes the largest number and species of animals in Vancouver.</ProjectText>
            </ProjectHolder>
        </HolderLeft>

        <HolderRight>
            <InfoHolder>
                <Deliverable>
                    <HeadingText>DELIVERABLES</HeadingText>
                    <BodyText>Wordpress, Figma, </BodyText>
                </Deliverable>
                <Team>
                    <HeadingText>TEAM</HeadingText>
                    <BodyText>Who was in the team</BodyText>
                </Team>
            </InfoHolder>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;