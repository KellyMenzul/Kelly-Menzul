import styled from "styled-components";
import React from "react";

const Holder = styled.div ``

const Button = styled.button `
font-family:textlight;
font-size:24px;
padding:10px;
border-style:none;

`

// margin-top:-160px;
const RegularButton = ({
}) => {
    return <Holder>
        <Button>Button</Button>
    </Holder>
}

export default RegularButton;