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

const ProjectHeader = styled.p `
font-family:textlighttwo;
`

const ProjectText = styled.p ``

const HeadingText = styled.p ``

const BodyText = styled.p ``

// margin-top:-160px;
const ProjectDeliverable = ({
}) => {
    return <Container>

        <HolderLeft>
            <ProjectHolder>
                <ProjectHeader>PROJECT</ProjectHeader>
                <ProjectText>About Project</ProjectText>
            </ProjectHolder>
        </HolderLeft>

        <HolderRight>
            <InfoHolder>
                <Deliverable>
                    <HeadingText>DELIVERABLES</HeadingText>
                    <BodyText>What was used</BodyText>
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