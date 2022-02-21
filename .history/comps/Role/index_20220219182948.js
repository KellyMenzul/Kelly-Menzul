import styled from "styled-components";
import React from "react";

const TextHolder = styled.div`
dispay:flex;
flex-wrap:wrap;
width:100%;
height:100%;
margin-top:-160px;

@media only screen and (max-width: 600px) {
    margin-top:-70px;
}

@media only screen and (min-width : 601px){
    margin-top:-170px;
}
`

const Text = styled.p`
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
line-height:30px;

@media only screen and (max-width: 600px) {
    font-size:19px;
    line-height:20px;
}

@media only screen and (min-width : 601px){
    font-size:36px;
}
`
// margin-top:-160px;
const Role = ({
    text = "Front-end Developer and UI/UX Designer",
    fontsize = "48px",
}) => {
    return <TextHolder>
    <Text fontsize={fontsize}>{text}</Text>
    </TextHolder>
}

export default Role;