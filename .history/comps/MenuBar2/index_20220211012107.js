import styled from "styled-components";
import React from "react";
import Link from "next/link";
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

@media only screen and (max-width: 550px){
    display:none;
}
`
const Top = styled.div `
display:flex;
width:100%;
padding:20px;
height:15%;
justify-content:left;
align-items:center;
background-color:white;
border-bottom:solid 1px;
`

const MenuIcon = styled.img `
width:40px;
height:40px;
`

const Bottom = styled.div ``


const MenuBar2 = ({
    onButtonPress=()=>{},
    bgcolor="transparent",
}) => { 
    return <Holder>
        <Top>
            <MenuIcon src="/plus.svg"/>
        </Top>
        <Bottom>

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