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
background-color:${props=>props.bgcolor};
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
    bgcolor1="transparent",
    bgcolor2="transparent",
    bgcolor3="transparent",
    bgcolor4="transparent",
}) => {

    function setColor(btn, color){
        var count=1;
        var property = document.getElementById(btn);

        if (count == 0){
            property.style.backgroundColor = "#FFFFFF"
            count=1;        
        }
        else{
            property.style.backgroundColor = "#7FFF00"
            count=0;
        }
    }

 
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
                    <MenuButton bgcolor={bgcolor1} onClick={()=>{onButtonPress()}}>About</MenuButton>
                </Link>

                <Link href="#work">
                <MenuButton bgcolor={bgcolor2}>Work</MenuButton>
                </Link>
                <MenuButton bgcolor={bgcolor3}>Contact</MenuButton>
                <MenuButton bgcolor={bgcolor4}>Resume</MenuButton>
            </MenuButtonHolder>
        </Right>  
    </Holder>
}

export default MenuBar;