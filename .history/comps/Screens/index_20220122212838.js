import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
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

&:hover {
    text-decoration:underline;
}
`

const Screens = ({
    src="/mindfulscreen.png",
    name="name",
    href="#"

}) => {
    return <Container>
        <Images src={src}/>
        <Text href={href}>{name}</Text>
        </Container>
        
}

export default Screens;