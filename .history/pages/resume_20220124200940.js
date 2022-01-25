import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import MenuBar2 from '../comps/MenuBar2'
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
position:relative;
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
const ResumeHolder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%:
height:100%;
margin-top:200px;
`

const KellyResume = styled.img `
width:45%;
box-shadow: 2px 2px 30px 10px rgba(0,0,0,0.19);
@media only screen and (max-width: 1500px) {
    width:80%;
}
`

const LoadHolder = styled.div `
position:absolute;
dislpay:block;
right:-520px;
bottom:-400px;
z-index:-3;

@media only screen and (max-width: 1500px) {
    display:none
    
}

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
    <LoadHolder>
    <Load width='100%'/>
    </LoadHolder>
      <MenuHolder>
        <MenuBar2 />
      </MenuHolder>

      <ResumeHolder>
          <KellyResume download src='kellyresume.png'/>
      </ResumeHolder>
    </Holder>
  )
}
