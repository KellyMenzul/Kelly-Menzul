import styled from "styled-components";
import React from "react";

const TextHolder = styled.div `
dispay:flex;
flex-wrap:wrap;
width:100%;
margin-left:0px;

@media only screen and (min-width : 600px) {
    width:100%;
}
@media only screen and (min-device-width : 1024px) {
    width:100%;
}
`

const Text = styled.h1`
font-family:"textlight";
font-weight:400;
font-size:36px;

@media only screen and (max-width: 600px) {
    font-size:24px;
}

@media only screen and (min-device-width : 600px) {
    font-size:30px;
}
@media only screen and (min-device-width : 1024px) {
    font-size:36px;
}


`

const Intro = ({}) => {
    return <TextHolder>
        <Text>I craft and develop cross platform interfaces with intuitive user experience.</Text>
        </TextHolder>
        
}

export default Intro;