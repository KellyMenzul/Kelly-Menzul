import styled from "styled-components";
import React from "react";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;

`

const Text = styled.h1`
font-family:"heading";
font-size:${props=>props.headsize};
font-weight:400;
`

const Head = ({
    headsize="60px",
    text="Heading"
}) => {
    return <TextHolder>
        <Text headsize={headsize}>{text}</Text>
        </TextHolder>
        
}

export default Head;