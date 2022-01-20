import styled from "styled-components";
import React from "react";

const TextHolder = styled.div`
dispay:flex;
flex-wrap:wrap;
width:100%;
`

const Text = styled.h1`
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
margin-top:-160px;
`

const Position = ({
    text = "Front-end Developer and UI/UX Designer",
    fontsize = 
}) => {
    return <TextHolder>
    <Text>{text}</Text>
    </TextHolder>
}

export default Position;