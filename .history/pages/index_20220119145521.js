import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'


const Holder = styled.div``

const LandingHolder = styled.div``

export default function Home() {
  return (
    <Holder>
      <MenuBar/>
      <Name/>
      <Position/>

    </div>
  )
}