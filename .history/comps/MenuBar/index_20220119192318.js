import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Holder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,187,233,0) 100%);
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
background-color:transparent;
font-family:"textlight";
font-size:25px;
color:black;
padding:12px;

&:hover {
    text-decoration:underline;
}
`

const Logo = styled.p`
font-size:40px;
`


const MenuBar = ({
    onButtonPress=()=>{},

}) => {
    return <Holder>
        <Left>
            <Link href="#landing">
            <LogoHolder>
                <Logo>Logo</Logo>
            </LogoHolder>
            </Link>
        </Left>
        <Right>
            <MenuButtonHolder>
                <Link href="#about">
                    <MenuButton onClick={()=>{onButtonPress()}}>About</MenuButton>
                </Link>

                <Link>
                <MenuButton>Work</MenuButton>
                </Link>
                <MenuButton>Contact</MenuButton>
                <MenuButton>Resume</MenuButton>
            </MenuButtonHolder>
        </Right>  
    </Holder>
}

export default MenuBar;