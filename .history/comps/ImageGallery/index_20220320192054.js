import styled from "styled-components";
import React from "react";


const ImageGallery = ({
    headsize="60px",
    text="Heading",
    textalign="left"
}) => {
    return <TextHolder>
        <Text textalign={textalign} headsize={headsize}>{text}</Text>
        </TextHolder>
        
}

export default ImageGallery;