import styled from "styled-components";
import React from "react";

const Holder = styled.div `
`

const Left = styled.div``
const Right = styled.div``

const MenuButton = styled.button``


const MenuBar = ({}) => {
    return <Holder>
        <Left>
            Logo
        </Left>
        <Right>
            <MenuButton></MenuButton>

        </Right>  
    </Holder>
}

export default MenuBar;