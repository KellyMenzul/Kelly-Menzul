import styled from "styled-components";
import React from "react";

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