import styled from "styled-components";
import React from "react";

const TextHolder = styled.div`
dispay:flex;
flex-wrap:wrap;
width:100%;
`

const Text = styled.h1`
font-family:"textlight";
font-size:48px;
font-weight:400;
margin-top:-160px;
`

const Position = ({}) => {
    return <TextHolder>
    <Text>Font-end Developer and UI/UX Designer</Text>
    </TextHolder>
}

export default Position;