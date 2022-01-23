import styled from "styled-components";
import React from "react";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;

@media only screen and (max-width: 1500px) {
  display:block;
}
`

const Text = styled.h1`
font-family:"heading";
font-size:${props=>props.headsize};
font-weight:400;
text-align:${props=>props.textalign};
`

const Head = ({
    headsize="60px",
    text="Heading"
    text
}) => {
    return <TextHolder>
        <Text headsize={headsize}>{text}</Text>
        </TextHolder>
        
}

export default Head;