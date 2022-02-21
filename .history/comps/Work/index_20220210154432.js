import styled from "styled-components";
import React from "react";
import Head from "../Head";
import Position from "../Position";
import router, {useRouter} from 'next/router';

const Holder = styled.div `
display:flex;
flex-direction:column;
width:50%;
`

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

const Button = styled.button `
border-style:none;
font-family:"textlight";
color:white;
background-color:black;
font-size:18px;
padding:15px;
width:70%;
transition:1s;

&: hover {
    background-color:#FF312E;
}

`

// margin-top:-160px;
const Work = ({
    headsize="60px",
    text = "text",
    fontsize = "24px",
    topmargin = "0px",
    headerhere='header',
    buttontext =  "buttontext",
    routeTo = '/.'

}) => {
    return <Holder>
        <Header headsize={headsize}>{headerhere}</Header>
        <Text topmargin={topmargin} fontsize={fontsize}>{text}</Text>
        <Button onClick={()=>router.push(routeTo)}>{buttontext}</Button>

    </Holder>
}

export default Work;