import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = styled.div `
dispay:flex;
width:100%;
height:100%;
background-color:blue;
margin-bottom:-120px;
`

const Text = styled.h1`
font-family:"heading";
font-size:20vw;
font-weight:400;
line-height:15vw;

@media only screen and (max-width: 600px) {
    font-size:96px;
    line-height:90px;
}
`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;