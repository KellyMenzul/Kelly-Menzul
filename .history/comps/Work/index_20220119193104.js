import styled from "styled-components";
import React from "react";

// margin-top:-160px;
const Work = ({
    text = "Front-end Developer and UI/UX Designer",
    fontsize = "48px",
    topmargin = "0px"
}) => {
    return <TextHolder>
    <Text topmargin={topmargin} fontsize={fontsize}>{text}</Text>
    </TextHolder>
}

export default Work;