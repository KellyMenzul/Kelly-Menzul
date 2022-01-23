import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Holder = styled.div ``

const Button = styled.button `
font-family:textlight;
font-size:20px;
padding:10px;
border-style:none;
background:black;
color:white;
width:150px;
transition:2s;
&:hover {
    background: linear-gradient(90deg, rgba(234,62,247,1) 0%, rgba(231,49,67,1) 50%, rgba(239,177,83,1) 100%);
}
`

// margin-top:-160px;
const RegularButton = ({
    buttontext="buttontext",
    link="#"
}) => {
    return <Holder>
        <Link href={link}>
            <Button>{buttontext}</Button>
        </Link>
    </Holder>
}

export default RegularButton;