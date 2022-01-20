import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'


const Holder = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const LandingHolder = styled.div`
display:flex;
`
const LandingHolderLeft = styled.div``

const LandingHolderRight = styled.div``

export default function Home() {
  return (
    <Holder>
      
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>

      <LandingHolder>
        <LandingHolderLeft></LandingHolderLeft>
        <LandingHolderRight
        <Name/>
        <Position/>
      </LandingHolder>

    </Holder>
  )
}
