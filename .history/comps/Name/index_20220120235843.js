import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = styled.div `
dispay:flex;
background-color:red;
flex-wrap:wrap;
width:100%;

`

const Text = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;

@media only screen and (min-width:415px) and (max-width: 1500px) {
    text-align:center;
    line-height:110px;
    font-size:120px;
}

@media only screen and (max-width: 414px) {
    font-size:80px;
    text-align:center;
    line-height:80px;
}


`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;