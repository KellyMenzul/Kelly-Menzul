import styled from "styled-components";
import React from "react";


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