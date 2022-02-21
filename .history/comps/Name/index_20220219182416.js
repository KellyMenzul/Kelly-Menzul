import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;
padding-top:30px;

@media only screen and (min-width : 601px){
    margin-top:200px;
}
`

const Text = styled.h1`
font-family:"heading";
font-size:288px;
font-weight:400;
line-height:250px;

@media only screen and (max-width: 600px) {
    font-size:96px;
    line-height:90px;
}

@media only screen and (min-width : 601px){
    font-size:200px;
    line-height:150px;
}

@media only screen and (min-width: 992px) {
    font-size:288px;
    line-height:250px;

}
`

const Name = ({}) => {
    return <TextHolder>
        <Text>Kelly Menzul</Text>
        </TextHolder>
        
}

export default Name;