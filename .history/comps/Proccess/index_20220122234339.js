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
const LeftSideText = styled.h2``
const RightSideText = styled.h2``

// margin-top:-160px;
const Process = ({
}) => {
    return <Holder>
        <Left>
            <p>The Problem</p>
        </Left>
        <Right>
            <p>Tinypaws needed a website that would create a welcoming experience for their target users. They wanted to brand themselves as an organization that cares for cats and kittens, their employees, and customers.</p>
        </Right>
    </Holder>
}

export default Process;