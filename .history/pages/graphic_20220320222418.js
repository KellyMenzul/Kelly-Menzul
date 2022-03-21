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

const Container = styled.div`

`
export default function FrankOcean() {

  return (
      <Container>
          <ImageGallery/>

      </Container>
  )
}