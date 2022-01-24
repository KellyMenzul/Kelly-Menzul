import styled from "styled-components";
import React from "react";
import Link from "next/link";
// import { useTheme } from "../../utils/provider";

const Holder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
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
    margin-top:-80px;
    text-align:center;
    line-height:50px;
    font-size:30px;
    
}
`

const Logo = styled.p`
font-size:40px;

@media only screen and (max-width: 550px){
    display:none;
}
`


const MenuBar2 = ({
    onButtonPress=()=>{},
    bgcolor="transparent",
}) => { 
    return <Holder>
        <Left>
            <Link href="../#landing">
            <LogoHolder>
                <Logo>Logo</Logo>
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
                
                <MenuButton bgcolor={bgcolor}>Resume</MenuButton>

                <Link href="mailto:kmnzul@gmail.com">
                <MenuButton bgcolor={bgcolor}>Contact</MenuButton>
                </Link>
                
            </MenuButtonHolder>
        </Right>  
    </Holder>
}

export default MenuBar2;