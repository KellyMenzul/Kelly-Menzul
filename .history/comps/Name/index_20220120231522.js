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

@media only screen and (min-width:440px) and (max-width: 1500px) {
    text-align:center;
    line-height:110px;
    font-size:120px;
}

@media only screen and (max-width: 449px) {
    font-size:100px;
    text-align:center;
    line-height:110px;
}


`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;