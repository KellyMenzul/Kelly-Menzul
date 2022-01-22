import styled from "styled-components";
import React from "react";
import Head from "../Head";
import Position from "../Position";
import router, {useRouter} from 'next/router';

const Holder = styled.div `
display:flex;
flex-direction:column;
width:50%;

@media only screen and (max-width: 1500px) {
    align-items:center;
}
`

const Header = styled.h2 `
font-family:"heading";
font-size:${props=>props.headsize};
font-weight:400;

@media only screen and (max-width: 1500px) {
    text-align:center;
}

`

const Text = styled.p `
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
margin-top:${props=>props.topmargin};

@media only screen and (max-width: 1500px) {
    text-align:center;
}
`

const Button = styled.button `
border-style:none;
font-family:"textlight";
color:white;
background-color:black;
font-size:18px;
padding:15px;
width:70%;
transition:1s;

&: hover {
    background-color:#FF312E;
}

`

// margin-top:-160px;
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