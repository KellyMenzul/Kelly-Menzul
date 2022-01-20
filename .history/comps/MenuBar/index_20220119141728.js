import styled from "styled-components";
import React from "react";

const Holder = styled.div `
background-color:red;
display:flex;
align-items:center;
justify-content:center;
width:100%;
`

const Left = styled.div`
flex:1;
background-color:blue;
`

const Right = styled.div`
flex:1;
background-color:green;

`


const MenuButtonHolder = styled.div``

const MenuButton = styled.button`
font-family:"textlight"
`


const MenuBar = ({}) => {
    return <Holder>
        <Left>
            <div>Logo</div>
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