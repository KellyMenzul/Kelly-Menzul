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
import ImageGallery from '../comps/ImageGallery'
import { style } from '@mui/system'


const Container = styled.div`
display:flex;
width:100vw;
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

const GalleryHolder = styled.div`
margin-top:300px;
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
      <Container>
        <MenuHolder>
          <WebMenuBarBack/>
          <MenuBarBack/>
        </MenuHolder>
        <GalleryHolder>
          <ImageGallery/>
        </GalleryHolder>
      </Container>
  )
}