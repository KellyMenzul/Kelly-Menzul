import styled from "styled-components";
import React from "react";
import { style } from "@mui/system";


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