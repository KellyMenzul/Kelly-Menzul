import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = styled.div `

`

const Text = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;
`

const Name = ({}) => {
    return <TextHolder>
        <Text></Text>Kelly Menzul
        </TextHolder>
        
}

export default Name;