import styled from "styled-components";
import React from "react";

const Holder = styled.div `
`

const Left = styled.div``
const Right = styled.div``

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
            <MenuButton>About</MenuButton>
            <MenuButton>Experience</MenuButton>
            <MenuButton>Work</MenuButton>
            <MenuButton>Contact</MenuButton>
            <MenuButton>Resume</MenuButton>
        </Right>  
    </Holder>
}

export default MenuBar;