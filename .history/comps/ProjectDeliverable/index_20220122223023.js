import styled from "styled-components";
import React from "react";
import Position from "../Position";

const Container = styled.div ``

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
            <p>Project Name</p>
            <p>About Project</p>
        </HolderLeft>

        <HolderRight>
            <Deliverable>
                <p>DELIVERABLES</p>
                <p>What was used</p>
            </Deliverable>
            <Team>
                <p>TEAM</p>
                <p>Who was in the team</p>
            </Team>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;