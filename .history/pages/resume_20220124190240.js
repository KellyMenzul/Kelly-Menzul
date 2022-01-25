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
z-index:2;

@media only screen and (max-width: 550px) {
  
}
`
const LandingHolder = styled.div`
display:flex;
flex-direction:row;
position:relative;
width:100%;
height:100%;
padding:40px;

@media only screen and (max-width: 1500px) {
flex-direction:column;
justify-content:center;
padding-top:150px;
align-items:center;
height:100vh;
width:100%;
}
`
const LandingHolderLeft = styled.div`
display:flex;
width:100%;
flex:2;
flex-direction:column;

@media only screen and (max-width: 1500px) {
  justify-content:center;
}
`

const LandingHolderRight = styled.div`
display:flex;
flex:1;
padding-top:150px;
align-items:flex-start;
justify-content:flex-end;

@media only screen and (max-width: 1500px) {
  padding-top:0px;
}
`

const NameHolder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;

@media only screen and (max-width: 1500px) {
  gap:40px;
}
`

const IntroHolder = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
// About

const AboutHolder = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100vh;
padding:40px;

@media only screen and (max-width: 1500px) {
    flex-direction:column;
    padding:0px;
    text-align:center;
    padding:0px;
    height:100%;
    
}
`

const  AboutHolderLeft = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media only screen and (max-width: 1500px) {
  margin-bottom:50px;
  
}
`

const  AboutHolderRight = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:1;
`
const AboutMeHolder = styled.div`
display:flex;
flex-direction:column;
width:70%;
`

// work

const WorkHolder = styled.div `
display:flex;
flex-direction:row;
width:100%;
height:100vh;
margin-bottom:200px;

@media only screen and (max-width: 1500px) {
    flex-direction:column;
}

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
position:absolute;
z-index:-1;
top:0px;


@media only screen and (max-width: 1500px) {
  position:none;
  top:0px;
  left:0px;

}
`

const HeadHolder = styled.div `
display:none;

@media only screen and (max-width: 1500px) {
  display:block;
}
`

const FullHeadHolder = styled.div`
display:block;

@media only screen and (max-width: 1500px) {
  display:none;
}
`


const TextHolder  =styled.div``

const HeroImage = styled.img`
width:70%;
transition: 1s ease-in-out;

&:hover {
  transform: scale(1.03);
}

@media only screen and (max-width: 1500px) {
  width:50%;
}
`

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
width:80%;
align-items:center;
justify-content:center;
margin-bottom:80px;
margin-top:100px;
padding-top:100px;
`

export default function Resume() {
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
      </MenuHolder>
      

      <LandingHolder
       id='landing'
       >
        <LoadHolder
        >
          <Load/>
        </LoadHolder>
        </LandingHolder>
    </Holder>
  )
}
