import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Load from '../comps/Load'
import Role from '../comps/Role'
import Screens from '../comps/Screens'
import { style } from '@mui/system'
import { useState, useEffect } from 'react'
import { animate, animationControls, motion, useAnimation } from 'framer-motion'
import InView, { useInView } from 'react-intersection-observer'
import RegularButton from '../comps/RegularButton'
import styles from '../styles/Home.module.css'
import MenuBar2 from '../comps/MenuBar2'
import AboutMeAccordion from '../comps/AboutMeAccordion'


const Holder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
flex-wrap:wrap;
`

const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
justify-content:center;
align-items:center;
z-index:2;
`
const ContentHolder = styled.div `
display:flex;
flex-direction:column;
`

const LandingHolder = styled.div`
display:flex;
flex-direction:row;
position:relative;
width:100%;
height:100vh;
padding:40px;

@media only screen and (max-width: 600px) {
  flex-direction:column;
  padding:20px;
  height:100vh;
}

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  flex-direction:column;
}
`

const LandingHolderLeft = styled.div`
display:flex;
width:100%;
flex:2;
flex-direction:column;

@media only screen and (max-width: 600px) {
  flex:1;
}
`

const LandingHolderRight = styled.div`
display:flex;
flex:1;
align-items:flex-start;
justify-content:flex-end;
@media only screen and (max-width: 600px) {
  align-items:flex-start;
}
@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  margin-top:-200px;
}
`

const NameHolder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`

const IntroHolder = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
height:100%;
`
// About

const AboutHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:20px;

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  flex-direction:row;
}
`

const  AboutHolderLeft = styled.div`
flex:1;
align-items:center;
position:relative;
width:100%;
max-height:600px;
justify-content:center;
display:flex;
flex-direction:column;
margin-bottom:200px;
z-index:-1;

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  max-height:800px;
}
`

const HeroImage = styled.img`
width:300%;
height:100%;

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
 width:150%; 
}

`

const AboutHolderRight = styled.div`
display:flex;
width:100%;
flex-direction:column;
flex:1;
`
const AboutMeHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
gap:20px;
`

// work

const WorkHolder = styled.div `
display:flex;
flex-direction:column;
width:100%;
height:100vh;
margin-bottom:200px;
`
const  WorkHolderLeft = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
`

const  WorkHolderRight = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`

const LoadHolder = styled.div`
position:relative;
z-index:-1;
display:block;
`

const HeadHolder = styled.div `
display:block;
padding-top:40px;

@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  display:none;
}
`

const FullHeadHolder = styled.div`
display:none;
@media only screen and (min-device-width : 701px) and (max-device-width : 1024px) and (orientation : portrait) {
  display:block;
}
`

const TextHolder  =styled.div``

const ContainerLeft = styled.div`
display:flex;
flex-direction:column;
flex:1;
width:100%;
align-items:center;
justify-content:center;
`
const ContainerRight = styled.div`
display:flex;
flex-direction:column;
width:100%;
flex:1;
align-items:center;
justify-content:center;
`

const AppHolder = styled.div`
display:flex;
width:100%;
padding:20px;
padding-top:60px;
align-items:center;
justify-content:center;
`
const AccordionHolder = styled.div ``

const Image

export default function Home() {
  // const {ref, inView} = useInView();
  // const animation = useAnimation();
  

  // useEffect(()=> {
  //   if(inView){
  //     animation.start({
  //       opacity:1,
  //       transition: {
  //         duration:3
  //       }
  //     });
  //   }
  //   if(!inView){
  //     animation.start({opacity:0,})
  //   }
  //   console.log("use effect hook, inView = ", inView);
  // }, [inView]);

  return (
    <Holder>
      <MenuHolder>
        <MenuBar />
        <MenuBar2/>
      </MenuHolder>
      <ContentHolder>
      <LandingHolder>
        <LandingHolderLeft>
          <NameHolder
                 id='landing'
                 as={motion.div}
                 initial="hidden" animate="visible" variants={{
                   hidden: {
                     opacity:0,
                     x:-100
           
                   },
                   visible: {
                     opacity: 1,
                     x:0,
           
                     transition: {
                       duration:2,
                     }
                   }
                 }}>
            <Name/>
            <Role/>
          </NameHolder>
        </LandingHolderLeft>
        <LandingHolderRight
               id='landing'
               as={motion.div}
               initial="hidden" animate="visible" variants={{
                 hidden: {
                   opacity:0,
         
                 },
                 visible: {
                   opacity: 1,
         
                   transition: {
                     delay:1.5,
                     duration:3,
                   }
                 }
               }}
        >
          <IntroHolder>
           <Intro/>
          </IntroHolder>
        </LandingHolderRight>

        <LoadHolder
               id='landing'
               as={motion.div}
               initial="hidden" animate="visible" variants={{
                 hidden: {
                   opacity:0,
                   x:100
         
                 },
                 visible: {
                   opacity: 1,
                   x:0,
         
                   transition: {
                     duration:2,
                   }
                 }
               }}>
                 
          <Load width='300%'/>
        </LoadHolder>
      </LandingHolder>

      <AboutHolder>
        <HeadHolder id='about'>
          <Head text='Hi There!'/>
        </HeadHolder>
        <AboutHolderLeft>
          <HeroImage src='/me2.png'/>
        </AboutHolderLeft>
        <AboutHolderRight>
            <AboutMeHolder>
                <FullHeadHolder>
                  <Head text='Hi there!'/>
                </FullHeadHolder>  
                  <Position fontsize='16px' text='My name is Kelly and I am a front-end developer and UX/UI Designer! I like to create online platforms and easy to use interface designs. My passion started when I took a digital media class in high school. From there, I developed an interest in development and design which has lead me to where I am today.'/>
                {/* <RegularButton target='_blank' link='https://dribbble.com/KellyMenzul' width='300px' buttontext="View my design work"/> */}
                <AccordionHolder>
                  <AboutMeAccordion/>
                </AccordionHolder>
            </AboutMeHolder>
        </AboutHolderRight>
        <AboutHolderLeft>
          <HeroImage src='/me2.png'/>
        </AboutHolderLeft>
      </AboutHolder>

      <AppHolder id="work">
        <Head headsize='50px' text='Here is some of my work!'/>
      </AppHolder>
      
      <WorkHolder>
        <ContainerLeft>
            <Screens info='Front-end Development | UX/UI Design' linkhref='/mindful' name='Mindful'/>
            <Screens info='Wordpress | UX/UI Design' linkhref='/tinypaws' src='tinypawsscreen.png' name='Tinypaws' />
        </ContainerLeft>
        <ContainerRight>
            <Screens info='Front-end Development | UX/UI Design'  linkhref='/wecycle' name='Wecycle' src='wecyclescreen.png'/>
            <Screens info='Wordpress | UX/UI Design' linkhref='/frankocean' src='frankoceanscreen.png' name='Frank Ocean'/>
        </ContainerRight>
      </WorkHolder>
    </ContentHolder>
  </Holder>
  )
}
