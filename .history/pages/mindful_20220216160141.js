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
import styles from "../styles/Home.module.css";
import AboutMeAccordion from '../comps/AboutMeAccordion'
import { style } from '@mui/system'
import MenuBarBack from '../comps/MenuBarBack'

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:10px;
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
height:100%;
`

const ImageHolderPer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
}
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
width:150%;
`

const DeliverableHolder = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
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

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
}
`

const ButtonHolder2 = styled.div`
display:flex;
flex-direction:row;
gap:30px;
margin-bottom:50px;

@media only screen and (max-width: 600px) {
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
}
`

const Mindful = styled.a`
text-decoration:underline;
margin-top:20px;
`

const AccordionHolder = styled.div `
display:none;
width:100%;

@media only screen and (max-width: 600px) {
  display:flex;

}

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  display:flex;
}
`


export default function MindfulApp() {
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
          <Head textalign='center' text='Mindful'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton target='_blank' link='http://www.kellymenzul.ca/Mindful/' buttontext='About Mindful'/>
          <RegularButton target='_blank' link='https://idsp3380-client.herokuapp.com/' buttontext='Visit Mindful'/>
        </ButtonHolder2>

        <ImageHolder>
          <ImageOne src='/mindfulmockup.png'/>
        </ImageHolder>

        <DeliverableHolder>
          <ProjectDeliverable 
          projecttext='Mindful is an application that acts as your mental health ???companion???. It provides you with daily reminders to take a moment out of your day to self-reflect on your emotions. Invest in yourself and share your thoughts.'
          />
          <AccordionHolder>
            <AboutMeAccordion 
            firsttitle='DELIVERABLES'
            firsttext='Next.js, Storybook, Axios, MUI, Lottie, Framer Motion, Styled-Components'
            secondtitle='TEAM'
            secondtext='Kelly Menzul, Hannah Cabug, Hannah MacPherson, Kailin Wei, Mai Toyoda, Hongsoon Kim'
            />
          </AccordionHolder>
          <Mindful target="_blank" href='http://www.kellymenzul.ca/Mindful/'>Learn more about the Mindful development process and team</Mindful>
        </DeliverableHolder>

        <ProcessHolder>
          <Process text='There is a negative stigma about mental health in today???s society. People refrain from having an open discussion about their emotions with others.'/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/mindful.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='Mindful is focused on managing the user???s mental health which includes emotions and well-being. It is a companion that encourages improving and maintaining one???s mental state in a healthy approach, using mindful reflections.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <Link href="https://docs.google.com/forms/d/1_22tXhgGRMS07jL3wyijyifYjZLJUP9rThzg7VZ1nT8/edit?usp=sharing">
            <a className={styles.survey} target="_blank">
          <ImageThree src='/survey.png'/>
          </a>
          </Link>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='Mindful is an application with features such as the journal section, infinite jokes card, chat system (coming soon), and breathe tool.'/>
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