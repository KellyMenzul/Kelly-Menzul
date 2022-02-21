import styled from 'styled-components'
import Head from '../comps/Head'
import MenuBar2 from '../comps/MenuBar2'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import RegularButton from '../comps/RegularButton'
import { useState } from 'react'
import Load2 from '../comps/Load2'
import { motion } from 'framer-motion'


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
transition:2s;

&:hover {
  display:flex;
  align-items:center;
  justify-content:center;
  width:150%;
  height:40%;
}
`

const ImageHolder2 = styled.div `

`

const ImageHolderPer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:40%;
transition:0.5s;
transition:2s;

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
`

const ButtonHolder = styled.div`
display:flex;
flex-direction:row;
height:40vh;
gap:30px;
margin-top:30px;

@media only screen and (max-width: 1500px) {
  flex-direection
}
`

const ButtonHolder2 = styled.div`
display:flex;
flex-direction:row;
gap:30px;
margin-bottom:50px;

@media only screen and (max-width: 1500px) {
  height:100%;
}
`


export default function Tinypaws() {
  const [setup1, setSetup1] =  useState(false)

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <LoadHolder
    as={motion.div}
    initial="hidden" animate="visible" variants={{
      hidden: {
        opacity:1,

      },
      visible: {
        opacity: 0,

        transition: {
          duration:1,
          delay:1
        }
      }
    }}
    >
      <Load2/>
    </LoadHolder>
  }

  return (
      <Container
      as={motion.div}
      initial="hidden" animate="visible" variants={{
        hidden: {
          opacity:0,

        },
        visible: {
          opacity: 1,

          transition: {
            duration:1,
          }
        }
      }}
      >
        <MenuHolder>
          <MenuBar2/>
        </MenuHolder>
        <Headholder>
          <Head textalign='center' text='Tinypaws'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton link='http://www.kellymenzul.ca/Tinypaws' buttontext='Visit Tinypaws'/>
        </ButtonHolder2>

        <ImageHolder2>
          <ImageOne src='/tinypaws.png'/>
        </ImageHolder2>

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
          <Process head='The Solution' text='We implemented a user profile for customers/hosts/volunteers/employees, a warm color pallette, additional cat resources, and an online shop.'/>
        </ProcessHolder>

        <ThankHolder>
          <Head headsize='50px' textalign='center' text='Thanks for viewing Tinypaws!'/>
        </ThankHolder>

        <ButtonHolder>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton link='http://www.kellymenzul.ca/Tinypaws' buttontext='Visit Tinypaws'/>
        </ButtonHolder>

      </Container>
  )
}