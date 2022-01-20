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
justify-content:flex-end;
`

const LandingHolderRight = styled.div`
display:flex;
flex:1;
align-items:flex-end;
justify-content:flex-end;
`

const NameHolder = styled.div``

const IntroHolder = styled.div`
display:flex;
`
// About

const AboutHolder = styled.div`
display:flex;
width:100%;
height:100vh;
padding:40px;
`

const  AboutHolderLeft = styled.div`
background-color:red;
`

const  AboutHolderRight = styled.div`
background-color:red;
`


export default function Home() {
  return (
    <Holder>
      
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>

      <LandingHolder>
        <LandingHolderLeft>
          <NameHolder>
            <Name/>
            <Position/>
          </NameHolder>
        </LandingHolderLeft>

        <LandingHolderRight>
          <IntroHolder>
           <Intro/>
          </IntroHolder>
        </LandingHolderRight>
      </LandingHolder>

      <AboutHolder id='about'>
        <AboutHolderLeft></AboutHolderLeft>
        <AboutHolderRight></AboutHolderRight>
      </AboutHolder>

      

    </Holder>
  )
}
