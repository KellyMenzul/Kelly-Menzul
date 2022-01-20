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

const Head = ({}) => {
    return <TextHolder>
        <Text>Heading</Text>
        </TextHolder>
        
}

export default Head;