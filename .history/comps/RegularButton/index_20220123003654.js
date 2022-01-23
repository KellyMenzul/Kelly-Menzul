import styled from "styled-components";
import React from "react";

const Holder = styled.div ``

const Button = styled.button `
font-family:textlight;
font-size:24px;
padding:10px;
border-style:none;
background: linear-gradient(90deg, rgba(234,62,247,1) 0%, rgba(231,49,67,1) 50%, rgba(239,177,83,1) 100%);
color:white;
border-radius:10px;
transition:2s;
width:50px;

&:hover {
    background:black
}
`

// margin-top:-160px;
const RegularButton = ({
}) => {
    return <Holder>
        <Button>Button</Button>
    </Holder>
}

export default RegularButton;