import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Work from '../comps/Work'
import Link from 'next/link'
import { useState, useEffect } from "react";






export default function Development() {
  const [setup1, setSetup1] =  useState(false)

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <div>
    </div>
  }

  return (
      <div>
          development
          <Link href="../#work">
            <button>back</button>
          </Link>
      </div>
  )
}