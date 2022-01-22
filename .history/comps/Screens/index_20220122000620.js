import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";

const Container = styled.div``

const Image = styled.img ``



const Screens = ({
    src="/developmindful.png",
    name="name"

}) => {
    return <div>
        <img src={src}/>
        <p>{name}</p>
        </div>
        
}

export default Screens;