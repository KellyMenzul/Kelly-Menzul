import styled from "styled-components";
import React from "react";

const Holder = styled.div ``

const Button = styled.button `
font-family:textlight;
`

// margin-top:-160px;
const RegularButton = ({
}) => {
    return <Holder>
        <Button>Button</Button>
    </Holder>
}

export default RegularButton;