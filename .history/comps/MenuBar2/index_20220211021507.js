import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useState } from "react";
// import { useTheme } from "../../utils/provider";

const Holder = styled.div `
display:flex;
flex-direction:column;
width:100%;
height:100vh;
align-items:center;
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

`

const Logo = styled.img`
width:10%;
`
const Top = styled.div `
display:flex;
width:100%;
padding:20px;
height:10%;
justify-content:space-between;
align-items:center;
background-color:white;
border-bottom:solid 1px;
`

const MenuIcon = styled.img `
width:30px;
height:30px;
transform: ${props=>props.rotate};
transition:transform 0.5s ease-in-out;
`

const Bottom = styled.div `
display:${props=>props.display};
width:100%;
height:${props=>props.height}vh;
overflow:hidden;
background-color:blue;
transition:${props=>props.transition};
`
const Bottom1 = styled.div ``
const HomeNumber = styled.div ``
const HomeWord = styled.div ``

const Bottom2 = styled.div ``
const AboutNumber = styled.div ``
const AboutWord = styled.div ``

const Bottom3 = styled.div ``
const ExperienceNumber = styled.div ``
const ExperienceWord = styled.div ``

const Number = styled.div ``
const Word = styled.div ``

const MenuBar2 = ({
    onButtonPress=()=>{},
    bgcolor="transparent",
}) => { 
    const [open, setOpen] = useState(false);
    var height = 0;
    var display = 'none';
    var rotate = 0
    var transition = '0.5s ease-in-out'

    if(open){
        height = '90';
        display = 'flex';
        rotate = 'rotate(45deg)'
        transition = '0.5s ease-in-out';
    }
    return <Holder>
        <Top>
            <Logo src="logo.png"/>
            <MenuIcon rotate={rotate} src="/plus.svg" onClick={()=>setOpen(!open)}/>
        </Top>
        <Bottom transition={transition} height={height}>
            <Bottom1>
                <HomeNumber></HomeNumber>
                <HomeWord></HomeWord>
            </Bottom1>
            
        </Bottom>
        

        {/* <Left>
            <Link href="../">
            <LogoHolder>
                <Logo src="logo.png"/>
            </LogoHolder>
            </Link>
        </Left>
        <Right>
            <MenuButtonHolder>
                <Link href="../#about">
                    <MenuButton bgcolor={bgcolor} onClick={()=>{onButtonPress()}}>About</MenuButton>
                </Link>

                <Link href="../#work">
                <MenuButton bgcolor={bgcolor}>Work</MenuButton>
                </Link>

                <Link href="mailto:kmnzul@gmail.com">
                <MenuButton bgcolor={bgcolor}>Contact</MenuButton>
                </Link>
                
            </MenuButtonHolder>
        </Right>   */}
    </Holder>
}

export default MenuBar2;