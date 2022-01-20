import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = style.div `

`

const Text = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;
`

const Name = ({}) => {
    return <Text>
        <TextHolder></TextHolder>Kelly Menzul
        </Text>
}

export default Name;