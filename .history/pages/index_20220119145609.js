import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'


const Holder = styled.div``
const MenuHolder = styled.div``
const LandingHolder = styled.div``

export default function Home() {
  return (
    <Holder>
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>
      <LandingHolder>
        
      </LandingHolder>
      <Name/>
      <Position/>

    </Holder>
  )
}
