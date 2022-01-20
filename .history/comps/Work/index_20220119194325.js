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

const Text = styled.p `
font-family:"textlight";
font-size:${props=>props.fontsize};
font-weight:400;
margin-top:${props=>props.topmargin};
`

const Button = styled.button ``

// margin-top:-160px;
const Work = ({
    headsize="32px",
    text = "text",
    fontsize = "24px",
    topmargin = "0px",
    header='header',

}) => {
    return <Holder>
        <Header headsize={headsize}>{header}</Header>
        <Text topmargin={topmargin} fontsize={fontsize}>{text}</Text>
        <Button>button</Button>

    </Holder>
}

export default Work;