import styled from "styled-components";
import React from "react";
import Position from "../Position";

const Container = styled.div `
display:flex;
flex-direction:row;
widht:100%;
height:100%;
`

const HolderLeft = styled.div ``

const HolderRight = styled.div ``

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
                <p>TEAM</p>
                <p>Who was in the team</p>
            </Team>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;