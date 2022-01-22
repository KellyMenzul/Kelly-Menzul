import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const Container = styled.div``

const Image = styled.img ``

const Text = styled.p``

const Screens = ({
    src="/developmindful.png",
    name="name"

}) => {
    return <Container>
        <img src={src}/>
        <p>{name}</p>
        </Container>
        
}

export default Screens;