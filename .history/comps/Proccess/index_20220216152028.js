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

@media only screen and (max-width: 600px) {
    flex-direction:column;
  }
  
  @media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
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
`
const RightSideText = styled.p`
width:100%;
font-size:18px;
line-height:40px;
text-align:center;


`

// margin-top:-160px;
const Process = ({
    head="The Problem",
    text="Tinypaws needed a website that would create a welcoming experience for their target users."
}) => {
    return <Holder>
        <Left>
            <LeftSideText>{head}</LeftSideText>
        </Left>
        <Right>
            <RightSideText>{text}</RightSideText>
        </Right>
    </Holder>
}

export default Process;