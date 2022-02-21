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

@media only screen and (max-width: 600px) {
    font-size:16px;
    padding:10px;
}
@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
}
`

// margin-top:-160px;
const RegularButton = ({
    buttontext="buttontext",
    link="#",
    width="200px",
    target=""

}) => {
    return <Holder>
        <Link href={link}>
            <a target={target}>
            <Button width={width}>{buttontext}</Button>
            </a>
        </Link>
    </Holder>
}

export default RegularButton;