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
display:flex;
flex-direction:column;
width:100%;
align-items:center;
justify-content:center;
background-color:yellow;
`

const HolderRight = styled.div `
display:flex;
flex-direction:column;
width:100%;
align-items:center;

background-color:red;
`

const Deliverable = styled.div ``

const Team = styled.div ``

const ProjectHeader = styled.p ``

const ProjectText = styled.p ``

const HeadingText = styled.p ``

const BodyText = styled.p ``

// margin-top:-160px;
const ProjectDeliverable = ({
}) => {
    return <Container>

        <HolderLeft>
            <ProjectHeader>Project Name</ProjectHeader>
            <ProjectText>About Project</ProjectText>
        </HolderLeft>

        <HolderRight>
            <Deliverable>
                <HeadingText>DELIVERABLES</HeadingText>
                <BodyText>What was used</BodyText>
            </Deliverable>
            <Team>
                <HeadingText>TEAM</HeadingText>
                <BodyText>Who was in the team</BodyText>
            </Team>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;