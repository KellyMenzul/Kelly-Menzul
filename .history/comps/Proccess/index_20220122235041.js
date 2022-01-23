import styled from "styled-components";
import React from "react";
import Position from "../Position";

const Holder = styled.div`
display:flex;
flex-direction: row;
width:100%;
height:100%;
align-items:center;
justify-content:center;

@media only screen and (max-width: 1500px) {
    flex-direction:column;
}
`
const Left = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
const Right = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
const LeftSideText = styled.h1`
font-family:heading;

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`
const RightSideText = styled.p`
width:50%;
font-size:18px;
line-height:40px
@media only screen and (max-width: 1500px) {
    text-align:center;
}
`

// margin-top:-160px;
const Process = ({
}) => {
    return <Holder>
        <Left>
            <LeftSideText>The Problem</LeftSideText>
        </Left>
        <Right>
            <RightSideText>Tinypaws needed a website that would create a welcoming experience for their target users. They wanted to brand themselves as an organization that cares for cats and kittens, their employees, and customers.</RightSideText>
        </Right>
    </Holder>
}

export default Process;