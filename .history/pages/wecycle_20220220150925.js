import styled from 'styled-components'
import Head from '../comps/Head'
import MenuBar2 from '../comps/MenuBar2'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import RegularButton from '../comps/RegularButton'
import Link from 'next/link'
import { useState } from 'react'
import Load2 from '../comps/Load2'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Acc

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
width:50%;
height:40%;
transition:2s;
`

const ImageHolder2 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:40%;
`

const ImageHolderPer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:90%;
height:40%;
transition:2s;


@media only screen and (max-width: 1500px) {
    width:120%;
}
`

const ImageOne = styled.img`
object-fit:cover;
width:100%;
height:80%;
`

const ImageTwo = styled.img`
object-fit:cover;
width:70%;
transition:2s;
`



const DeliverableHolder = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:50vh;
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
`

const ButtonHolder2 = styled.div`
display:flex;
flex-direction:row;
gap:30px;
margin-bottom:50px;
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

export default function Wecycle() {
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
          <Head textalign='center' text='Wecycle'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton target='_blank' link='https://wecycle-apps.vercel.app/Home' buttontext='Visit Wecycle'/>
        </ButtonHolder2>

        <ImageHolder2>
          <ImageOne src='/wecycle.png'/>
        </ImageHolder2>

        <DeliverableHolder>
          <ProjectDeliverable projecttext="Wecycle's mission is to educate their users about the importance of recycling. Wecycle wants to be the bridge between parents/teachers and children when it comes to an engaging and fun learning experience."
          delivetext='Next.js, Storybook, Styled-Components'
          teamtext='Kelly Menzul, Hannah Cabug, Hyerin Cheon, Leah Mah'
          />
          <AccordionHolder>
            <AboutMeAccordion 
            firsttitle='DELIVERABLES'
            firsttext='Next.js, Storybook, Axios, MUI, Lottie, Framer Motion, Styled-Components'
            secondtitle='TEAM'
            secondtext='Kelly Menzul, Hannah Cabug, Hannah MacPherson, Kailin Wei, Mai Toyoda, Hongsoon Kim'
            />
          </AccordionHolder>
        </DeliverableHolder>

        <ProcessHolder>
          <Process text="Waste management is prevelant in today's world however, children have difficulties paying attention and retaining information in school and at home."/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/wecyclepic.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='Create an interactive application with visuals and components that allows children to earn badges as they complete all three waste regions.'/>
        </ProcessHolder>

        <ImageHolderPer>
        <p>Click to see our Figma file!</p>
        <Link href="https://www.figma.com/file/6C49WqM3rRGLIDEUOyiqna/Wecycle-StyleGuide?node-id=18%3A3">
          <a target='_blank' className={styles.figma}>
          <ImageTwo src='/prototype.png'/>
          </a>
          </Link>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='Design an interactive application with easy navigation. Implement fun graphics that are appealing to the target user and body texts that are not overwhelming.'/>
        </ProcessHolder>

        <ThankHolder>
          <Head headsize='50px' textalign='center' text='Thanks for viewing Mindful!'/>
        </ThankHolder>

        <ButtonHolder>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton target='_blank' link='https://idsp3380-client.herokuapp.com/' buttontext='Visit Mindful'/>
        </ButtonHolder>

      </Container>
  )
}