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

const Container = styled.div``
const Holder = styled.div``
const LinkHolder = styled.div``
const ContainerLeft = styled.div``
const ContainerRight = styled.div``
const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
z-index:2;
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

        <Holder>
        </Holder>
      </Container>
  )
}