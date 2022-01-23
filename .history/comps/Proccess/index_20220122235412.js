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
    margin-top5100px;
}
`
const Left = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`
const Right = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`
const LeftSideText = styled.h1`
font-family:heading;

`
const RightSideText = styled.p`
width:50%;
font-size:18px;
line-height:40px


`

// margin-top:-160px;
const Process = ({
}) => {
    return <Holder>
        <Left>
            <LeftSideText>The Problem</LeftSideText>
        </Left>
        <Right>
            <RightSideText>Tinypaws needed a website that would create a welcoming experience for their target users.</RightSideText>
        </Right>
    </Holder>
}

export default Process;