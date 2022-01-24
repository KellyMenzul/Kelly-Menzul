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
import { useEffect } from 'react'
import { animate, animationControls, useAnimation } from 'framer-motion'
import InView, { useInView } from 'react-intersection-observer'

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
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:40%;
transition:2s;

&:hover {
  width:150%;
}

@media only screen and (max-width: 1500px) {
    width:120%;
  &:hover {
    width:150%;
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
transition:2s;

&:hover {
  width:70%;

}
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
  height:100%;
  margin-bottom:200px;
}
`

const ButtonHolder2 = styled.div`
display:flex;
flex-direction:row;
gap:30px;
margin-bottom:50px;

@media only screen and (max-width: 1500px) {
  height:100%;
  flex-direction:column;
}
`

const Mindful = styled.a`
text-decoration:underline;
`


export default function MindfulApp() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();
  const [ref10, inView10] = useInView();
  const [ref11, inView11] = useInView();

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation9 = useAnimation();
  const animation10 = useAnimation();
  const animation11 = useAnimation();
  

  useEffect(()=> {
    if(inView){
      animation.start({
        y:0,
        opacity:1,
        transition: {
          duration:0.5,
          delay:0.8
        }
      });
    }
    if(!inView){
      animation.start({opacity:0, y:50})
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  useEffect(()=> {
    if(inView2){
      animation2.start({
        opacity:1,
        y:0,
        transition: {
          duration:0.5,
          delay:0.8
        }
      });
    }
    if(!inView2){
      animation2.start({opacity:0, y:50})
    }
    console.log("use effect hook, inView2 = ", inView2);
  }, [inView2]);

  useEffect(()=> {
    if(inView2){
      animation2.start({
        opacity:1,
        y:0,
        transition: {
          duration:0.5,
          delay:0.8
        }
      });
    }
    if(!inView2){
      animation2.start({opacity:0, y:50})
    }
    console.log("use effect hook, inView2 = ", inView2);
  }, [inView2]);

  const [setup1, setSetup1] =  useState(false)

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <LoadHolder as={motion.div} 
    initial="hidden" animate="visible" variants={{
    hidden: {
      opacity:1,

    },
    visible: {
      opacity: 0,

      transition: {
        delay:.10,
        duration:2
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
        duration:1
      }
    }
  }}
      >
        <MenuHolder>
          <MenuBar2/>
        </MenuHolder>
        <Headholder>
          <Head textalign='center' text='Mindful'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton width='250px' link='http://www.kellymenzul.ca/Mindful/' buttontext='Learn about Mindful'/>
          <RegularButton link='https://idsp3380-client.herokuapp.com/' buttontext='Visit Mindful'/>
        </ButtonHolder2>

        <ImageHolder>
          <ImageOne src='/mindfulmockup.png'/>
        </ImageHolder>

        <DeliverableHolder>
          <ProjectDeliverable projecttext='Mindful is an application that acts as your mental health “companion”. It provides you with daily reminders to take a moment out of your day to self-reflect on your emotions. Invest in yourself and share your thoughts.'
          delivetext='Next.js, Storybook, Axios, MUI, Lottie, Framer Motion, Styled-Components'
          teamtext='Kelly Menzul, Hannah Cabug, Hannah MacPherson, Kailin Wei, Mai Toyoda, Hongsoon Kim'
          />
          <Mindful href='http://www.kellymenzul.ca/Mindful/'>Learn more about the Mindful development process and team</Mindful>
        </DeliverableHolder>

        <ProcessHolder>
          <Process text='There is a negative stigma about mental health in today’s society. People from refrain from having an open discussion about their emotions with others.'/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/mindful.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='Mindful is focused on managing the user’s mental health which includes emotions and well-being. It is a companion that encourages improving and maintaining one’s mental state in a healthy approach, using mindful reflections.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <p>Click to see our survey!</p>
          <Link href="https://docs.google.com/forms/d/1_22tXhgGRMS07jL3wyijyifYjZLJUP9rThzg7VZ1nT8/edit?usp=sharing">
          <ImageTwo src='/survey.png'/>
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
          <RegularButton link='https://idsp3380-client.herokuapp.com/' buttontext='Visit Mindful'/>
        </ButtonHolder>

      </Container>
  )
}