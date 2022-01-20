import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'



const LandingHolder = styled.div

export default function Home() {
  return (
    <div>
      <MenuBar/>
      <Name/>
      <Position/>

    </div>
  )
}
