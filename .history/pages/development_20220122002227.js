import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Work from '../comps/Work'
import Link from 'next/link'
import { useState,} from "react";
import Load2 from '../comps/Load2'
import MenuBar2 from '../comps/MenuBar2'
import Screens from '../comps/Screens'

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
`
const Holder = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
align-items:center;
justify-content:center;
`

const LinkHolder = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
margin-top:100px;
`
const ContainerLeft = styled.div`
display:flex;
flex-direction:column;
flex:1;
width:100%;
align-items:center;
justify-content:center;
`
const ContainerRight = styled.div`
display:flex;
background-color:blue;
width:100%;
flex:1;
align-items:center;
justify-content:center;
`
const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
z-index:2;
top:0px;
`

const LoadHolder = styled.div`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items:center;
`




export default function Development() {
  const [setup1, setSetup1] =  useState(false)

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <LoadHolder>
      <Load2/>
    </LoadHolder>
  }

  return (
      <Container>
        <MenuHolder>
          <MenuBar2/>
        </MenuHolder>
        <LinkHolder>
          <Link href="../#work">
              <button>back</button>
            </Link>
        </LinkHolder>
        <p>what i've built</p>

        <Holder>
          <ContainerLeft>
            <Screens name='Mindful'/>
            <Screens/>
            <Screens/>
          </ContainerLeft>
          <ContainerRight>
            test
          </ContainerRight>
        </Holder>
      </Container>
  )
}