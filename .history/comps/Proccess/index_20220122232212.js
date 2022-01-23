import styled from "styled-components";
import React from "react";
import Position from "../Position";


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