import styled from 'styled-components'
import Head from '../comps/Head'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import RegularButton from '../comps/RegularButton'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Load2 from '../comps/Load2'
import AboutMeAccordion from '../comps/AboutMeAccordion'
import MenuBarBack from '../comps/MenuBarBack'
import WebMenuBarBack from '../comps/WebMenuBarBack'


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
z-index:3;
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
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;
flex-direction:row;
gap:30px;
margin-bottom:50px;
@media only screen and (max-width: 600px) {
  flex-direction:column;
  margin-top:50px;
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

  return (
      <Container>

      </Container>
  )
}