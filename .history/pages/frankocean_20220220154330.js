import styled from 'styled-components'
import Head from '../comps/Head'
import MenuBar2 from '../comps/MenuBar2'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import RegularButton from '../comps/RegularButton'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Load2 from '../comps/Load2'
import AboutMeAccordion from '../comps/AboutMeAccordion'
import MenuBarBack from '../comps/MenuBarBack'


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
transition:2s;
`

const ImageOne = styled.img`
object-fit:cover;
width:150%;
`

const ImageTwo = styled.img`
object-fit:cover;
width:80%;
`
const ImageThree = styled.img`
object-fit:cover;
width:100%;
`

const DeliverableHolder = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:50vh;

@media only screen and (max-width: 600px) {
  width:90%;
}
`

const ProcessHolder = styled.div `
display:flex;
width:100%;
height:100vh;
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
@media only screen and (max-width: 600px) {
  flex-direction:column;
}
`

const ButtonHolder2 = styled.div`
background-color:red;
display:flex;
flex-direction:row;
gap:30px;
margin-bottom:50px;
@media only screen and (max-width: 600px) {
  flex-direction:column;
}
`

const Mindful = styled.a`
text-decoration:underline;
`

const AccordionHolder = styled.div `
display:none;
width:100%;

@media only screen and (max-width: 600px) {
  display:flex;
}
`


export default function FrankOcean() {
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
          <MenuBarBack/>
        </MenuHolder>
        <Headholder>
          <Head textalign='center' text='Frank Ocean'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton target='_blank' link='http://www.kellymenzul.ca/frankocean/' buttontext='Visit Frank Ocean'/>
        </ButtonHolder2>

        <ImageHolder>
          <ImageOne src='/frank.png'/>
        </ImageHolder>

        <DeliverableHolder>
          <ProjectDeliverable projecttext='This website is about Frank Ocean who is an American songwriter, it would include his music, albums, and his lyrics. It displays some of his best works and lyrics for people to see. The website is meant to give the user new music discoveries and inspiration or for fans to come and appreciate more of his art.'
          delivetext='Wordpress'
          teamtext='Kelly Menzul'
          />
          <AccordionHolder>
            <AboutMeAccordion 
            firsttitle='DELIVERABLES'
            firsttext='Wordpress'
            secondtitle='TEAM'
            secondtext='Kelly Menzul'
            />
          </AccordionHolder>
        </DeliverableHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='Create a website that is a safe space to possibly help someone who is going through tough situations and use music as a way to feel better and resonate with his lyrics.'/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/frankocean.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Process' text='It all started with an idea which lead to user research, prototyping, wireframing, and multiple user testings.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <ImageThree src='/frnakonceanfive.png'/>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='Implement a lyric analysis blog, a music room, audio throughout the website, and interactive components throughout the website.'/>
        </ProcessHolder>

        <ThankHolder>
          <Head headsize='50px' textalign='center' text='Thanks for viewing Frank Ocean!'/>
        </ThankHolder>

        <ButtonHolder>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton link='http://www.kellymenzul.ca/frankocean/' buttontext='Visit Frank Ocean'/>
        </ButtonHolder>

      </Container>
  )
}