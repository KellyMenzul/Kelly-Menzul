import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";
import Link from "next/link";

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;

&:hover {
    #text {
        text-decoration:underline;
    }
}
`

const Images = styled.img `
width:100%;
transition: 1s ease-in-out;
margin-bottom:-40px;

&:hover {
    transform: scale(1.1);
}
`

const Text = styled.a`
font-size:24px;

`

const Screens = ({
    src="/mindfulscreen.png",
    name="name",
    href="#",
    linkhref="#"

}) => {
    return <Link href={linkhref}><Container>
        <Images src={src}/>
        <Text id="text" href={href}>{name}</Text>
        <p>[UX/UI]</p>
        </Container>
        </Link>
        
}

export default Screens;