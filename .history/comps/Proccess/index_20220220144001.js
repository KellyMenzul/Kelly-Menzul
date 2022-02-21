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
`
const Left = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:70%;
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
width:70%;
font-size:18px;
line-height:40px;
text-align:center;

@media only screen and (max-width: 600px) {
    text-align:center;
  }
  
  @media only screen and (min-width : 600px){
  }
  
  @media only screen and (min-width: 1024px) {
  }
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