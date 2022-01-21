import styled from "styled-components";
import React from "react";

const TextHolder = styled.div`
dispay:flex;
flex-wrap:wrap;
width:100%;
`

const Text = styled.p`
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
margin-top:-160px;
line-height:30px;


@media only screen and (min-width:415px) and (max-width: 1500px) {
    margin-top:-80px;
    text-align:center;
    line-height:50px;
    font-size:80px;
}

@media only screen and (max-width: 414px) {
    font-size:80px;
    text-align:center;
    line-height:80px;
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