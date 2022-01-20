import styled from "styled-components";
import React from "react";
import Head from "../Head";
import Position from "../Position";

const Holder = styled.div ``

const Header = styled.h2 `
font-family:"heading";
font-size:${props=>props.headsize};
font-weight:400;
`

const Text = styled.p ``

const Button = styled.button ``

// margin-top:-160px;
const Work = ({
    headsize="32px"

}) => {
    return <Holder>
        <Header>head</Header>
        <Text>Text</Text>
        <Button>button</Button>

    </Holder>
}

export default Work;