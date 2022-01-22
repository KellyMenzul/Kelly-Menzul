import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const Container = styled.div`
display:flex;
flex-direction:column;
`

const Images = styled.img ``

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