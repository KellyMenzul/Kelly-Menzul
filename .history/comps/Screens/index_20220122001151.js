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
margin-bottom:
`

const Images = styled.img `
width:100%;
transition: 1s ease-in-out;

&:hover {
    transform: scale(1.03);
}
`

const Text = styled.p``

const Screens = ({
    src="/developmindful.png",
    name="name"

}) => {
    return <Container>
        <Images src={src}/>
        <Text>{name}</Text>
        </Container>
        
}

export default Screens;