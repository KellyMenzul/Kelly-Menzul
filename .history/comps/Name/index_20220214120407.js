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

@media only screen and (max-width: 700px) {
    font-size:96px;
    line-height:90px;
}
@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size:150px;
    line-height:120px;
    }
`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;