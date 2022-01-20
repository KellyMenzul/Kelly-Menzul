import styled from "styled-components";
import React from "react";

const Holder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
`

const Left = styled.div`
flex:1;
`

const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`


const MenuButtonHolder = styled.div``

const MenuButton = styled.button`
border-style:none;
background-color:grey;
font-family:"textlight"
width:70px;
height:70px;
`

const Logo = styled.p`
font-size:40px;
`


const MenuBar = ({}) => {
    return <Holder>
        <Left>
            <Logo>Logo</Logo>
            <div></div>
        </Left>
        <Right>
            <MenuButtonHolder>
                <MenuButton>About</MenuButton>
                <MenuButton>Experience</MenuButton>
                <MenuButton>Work</MenuButton>
                <MenuButton>Contact</MenuButton>
                <MenuButton>Resume</MenuButton>
            </MenuButtonHolder>
        </Right>  
    </Holder>
}

export default MenuBar;