import styled from "styled-components";
import React from "react";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;
`

const Text = styled.h1`
font-family:"textlight";
font-weight:400;
font-size:36px;

@media only screen and (max-width: 600px) {
    font-size:19px;
    line-height:20px;
    margin-top:-60px;
}
`

const Intro = ({}) => {
    return <TextHolder>
        <Text>I craft and develop cross platform interfaces with intuitive user experience.</Text>
        </TextHolder>
        
}

export default Intro;