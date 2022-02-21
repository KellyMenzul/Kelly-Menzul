import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;

`

const Text = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;

@media only screen and (max-width: 600px) {
    font-size:96px;
    line-height:20px;
}
`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;