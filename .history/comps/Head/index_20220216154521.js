import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;
padding-top:
`

const Text = styled.h1`
font-family:"heading";
font-size:${props=>props.headsize};
font-weight:400;
text-align:${props=>props.textalign};
`

const Head = ({
    headsize="60px",
    text="Heading",
    textalign="left"
}) => {
    return <TextHolder>
        <Text textalign={textalign} headsize={headsize}>{text}</Text>
        </TextHolder>
        
}

export default Head;