import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Holder = styled.div ``

const Button = styled.button `
font-family:textlight;
font-size:20px;
padding:20px;
border-style:none;
background:black;
color:white;
width:${props=>props.width};
transition:2s;
&:hover {
    background: linear-gradient(90deg, rgba(234,62,247,1) 0%, rgba(231,49,67,1) 50%, rgba(239,177,83,1) 100%);
}

@media only screen and (max-width: 1500px) {
    width:150px;
    font-size:16px;
  }
`

// margin-top:-160px;
const RegularButton = ({
    buttontext="buttontext",
    link="#",
    width="200px"

}) => {
    return <Holder>
        <Link href={link}>
            <a target="_blank">
            <Button width={width}>{buttontext}</Button>
            </a>
        </Link>
    </Holder>
}

export default RegularButton;