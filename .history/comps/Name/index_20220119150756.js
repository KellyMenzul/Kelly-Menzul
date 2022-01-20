import styled from "styled-components";
import React from "react";

const TextHolder = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;
backround-color:red;
`

const Name = ({}) => {
    return <TextHolder>Kelly Menzul</TextHolder>
}

export default Name;