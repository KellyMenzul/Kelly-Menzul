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
position:fixed;
`
const LandingHolder = styled.div`
display:flex;
width:100%;
height:100vh;
`
const LandingHolderLeft = styled.div`
display:flex;
flex-direction:
`

const LandingHolderRight = styled.div``

export default function Home() {
  return (
    <Holder>
      
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>

      <LandingHolder>
        <LandingHolderLeft>
          <Name/>
          <Position/>
        </LandingHolderLeft>
        <LandingHolderRight></LandingHolderRight>
      </LandingHolder>

    </Holder>
  )
}
