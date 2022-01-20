import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import { style } from '@mui/system'


const Holder = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
`
const LandingHolder = styled.div`
display:flex;
width:100%;
height:100vh;
padding:40px;
`
const LandingHolderLeft = styled.div`
display:flex;
width:100%;
flex:2;
flex-direction:column;
align-items:flex-end;
background-color:red;
`

const LandingHolderRight = styled.div`
display:flex;
background-color:blue;
flex:1;
align-items:flex-end;
`

const NameHolder = style.div`

`

export default function Home() {
  return (
    <Holder>
      
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>

      <LandingHolder>
        <LandingHolderLeft>
          <NameHolder></NameHolder>
          <Name/>
          <Position/>
        </LandingHolderLeft>

        <LandingHolderRight>
          <Intro/>
        </LandingHolderRight>
      </LandingHolder>

    </Holder>
  )
}
