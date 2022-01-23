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
flex-wrap:wrap;

@media only screen and (max-width: 1500px) {
    flex-direction:column;
    margin-top:200px;

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
width:50%;
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
width:100%;

@media only screen and (max-width: 1500px) {
    margin-top:50px;
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;
    justify-content:center;
    gap:10%;
}
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
@media only screen and (max-width: 1500px) {
    text-align:center;
}

`

const ProjectText = styled.p `
font-size:18px;
line-height:40px;

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`

const HeadingText = styled.h3`
font-family:textlighttwo;

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`

const BodyText = styled.p `

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`

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
                    <BodyText>Wordpress, Figma, UX/UI</BodyText>
                </Deliverable>
                <Team>
                    <HeadingText>TEAM</HeadingText>
                    <BodyText>Kelly Menzul, Daswon Gosse, Joyce Chan</BodyText>
                </Team>
            </InfoHolder>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;