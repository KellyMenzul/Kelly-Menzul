import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const Container = styled.div``

const Images = styled.img ``

const Text = styled.p``

const Screens = ({
    src="/developmindful.png",
    name="name"

}) => {
    return <Container>
        <Image src={src}/>
        <p>{name}</p>
        </Container>
        
}

export default Screens;