import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Work from '../comps/Work'
import Link from 'next/link'






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