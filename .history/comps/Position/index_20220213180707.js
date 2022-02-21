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
margin-top:${props=>props.topmargin};
line-height:30px;

@media only screen and (max-width: 600px) {
    font-size:19px;
    line-height:20px;
    margin-top:-60px;
}
`
// margin-top:-160px;
const Position = ({
    text = "Front-end Developer and UI/UX Designer",
    fontsize = "48px",
    topmargin = "0px"
}) => {
    return <TextHolder>
    <Text topmargin={topmargin} fontsize={fontsize}>{text}</Text>
    </TextHolder>
}

export default Position;