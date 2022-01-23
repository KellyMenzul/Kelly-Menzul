import styled from "styled-components";
import React from "react";
import Position from "../Position";

const Container = styled.div ``

const HolderLeft = styled.div ``

const HolderRight = styled.div ``

const Deliverable = styled.div ``

const Deliverable = styled.div ``

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
            <div>
                <p>DELIVERABLES</p>
                <p>What was used</p>
            </div>
            <div>
                <p>TEAM</p>
                <p>Who was in the team</p>
            </div>
        </HolderRight>
        
    </Container>
}

export default ProjectDeliverable;