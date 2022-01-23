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
import Screens from '../comps/Screens'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import { style } from '@mui/system'

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:center;
`

const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
z-index:2;
top:0px;
`

const LoadHolder = styled.div`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items:center;
`
const Headholder = styled.div`
display:flex;
width:100%;
height:100%;
align-items:center;
justify-content:center;
margin-top:100px;
`

const ImageHolder = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:40%;
`

const ImageHolderPer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:40%;
transition:0.5s;

&:hover {
  width:150%;
}

@media only screen and (max-width: 1500px) {
  &:hover {
    width:200%;
  }
}
`

const ImageOne = styled.img`
object-fit:cover;
width:100%;
@media only screen and (max-width: 1500px) {
}
`

const ImageTwo = styled.img`
object-fit:cover;
width:50%;
@media only screen and (max-width: 1500px) {
}
`

const DeliverableHolder = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:50vh;

@media only screen and (max-width: 1500px) {
  height:100%;
}
`

const ProcessHolder = styled.div `
display:flex;
width:100%;
height:100vh;

@media only screen and (max-width: 1500px) {
  height:100%;
}
`

const ThankHolder = styled.div `
display:flex;
flex-direction:column;
align-items:center;
text
`


export default function Tinypaws() {
  // const [setup1, setSetup1] =  useState(false)

  // if (setup1 === false) {
  //   setTimeout(() => {
  //     setSetup1(true)
  //   },3000)

  //   return <LoadHolder>
  //     <Load2/>
  //   </LoadHolder>
  // }

  return (
      <Container>
        <MenuHolder>
          <MenuBar2/>
        </MenuHolder>
        <Headholder>
          <Head textalign='center' text='Tinypaws'/>
        </Headholder>
        <ImageHolder>
          <ImageOne src='/tinypaws.png'/>
        </ImageHolder>

        <DeliverableHolder>
          <ProjectDeliverable/>
        </DeliverableHolder>

        <ProcessHolder>
          <Process/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/tinypawspic.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='We began researching and conducting surveys to determine the target market for Tinypaws.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <ImageTwo src='/tinypawspersona.png'/>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='We implemented a user profile for customers/hosts/volunteers/employees, a warm color pallette, additional cat resources, an online shop.'/>
        </ProcessHolder>

        <ThankHolder>
          <Head text='Thanks for viewing Tinypaws!'/>
        </ThankHolder>

      </Container>
  )
}