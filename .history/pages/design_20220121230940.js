import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Work from '../comps/Work'
import Link from 'next/link'
import Load2 from '../comps/Load2'


const LoadHolder = styled.div`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items:center;
`




export default function Design() {

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <LoadHolder>
      <Load2/>
    </LoadHolder>
  }

  return (
      <div>
          design
          <Link href="../#work">
          <button>back</button>
          </Link>
          <img width="30%"  src="/mindfulpic.png"/>

      </div>
  )
}