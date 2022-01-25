import styled from "styled-components";
import React from "react";
import Link from "next/link";
// import { useTheme } from "../../utils/provider";

const Holder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:150px;
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,187,233,0) 100%);

@media only screen and (max-width: 550px){
    padding:40px;
}
`
const LogoHolder = styled.div `
margin-left:50px;
`

const Left = styled.div`
flex:1;
`

const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`

const MenuButtonHolder = styled.div`
display:flex;
flex-firection:row;
width:100%;
justify-content:flex-end;
gap:30px;
margin-right:50px;
@media only screen and (max-width: 1500px) {
    gap:10px;
}
`

const MenuButton = styled.button`
border-style:none;
background-color:${props=>props.bgcolor};
font-family:"textlight";
font-size:25px;
color:black;
padding:12px;

&:hover {
    text-decoration:underline;
}
@media only screen and (max-width: 1500px) {
    font-size:16px;
}
`

const Logo = styled.img`
width:10%;

@media only screen and (max-width: 550px){
    display:none;
}
`


const MenuBar = ({
    onButtonPress=()=>{},
    bgcolor="transparent",
}) => { 
    return <Holder>
        <Left>
            <Link href="#landing">
            <LogoHolder>
                <Logo src="logo.png"/>
            </LogoHolder>
            </Link>
        </Left>
        <Right>
            <MenuButtonHolder>
                <Link href="#about">
                    <MenuButton bgcolor={bgcolor} onClick={()=>{onButtonPress()}}>About</MenuButton>
                </Link>

                <Link href="#work">
                <MenuButton bgcolor={bgcolor}>Work</MenuButton>
                </Link>
                
                <Link href="/resume">
                <MenuButton bgcolor={bgcolor}>Resume</MenuButton>
                </Link>

                <Link hre

            </MenuButtonHolder>
        </Right>  
    </Holder>
}

export default MenuBar;