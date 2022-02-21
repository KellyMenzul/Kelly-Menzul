import styled from "styled-components";
import React from "react";

const TextHolder = styled.div`
dispay:flex;
flex-wrap:wrap;
width:100%;
height:100%;
`

const Text = styled.p`
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
margin-top:-160px;
line-height:30px;

@media only screen and (max-width: 600px) {
    font-size:19px;
    line-height:20px;
    margin-top:-60px;
}
@media only screen and (min-device-width : 601px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size:30px;
    line-height:200px;
    margin-top:-150px;
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