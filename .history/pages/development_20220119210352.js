import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import Work from '../comps/Work'


const Holder = styled.div`
display:flex;
flex-direction:column;
width:100%;
flex-wrap:wrap;
`
const MenuHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
position:fixed;
`
const LandingHolder = styled.div`
display:flex;
width:100%;
height:100vh;
padding:40px;
flex-wrap:wrap;
`
const LandingHolderLeft = styled.div`
display:flex;
width:100%;
flex:2;
flex-direction:column;
justify-content:flex-end;
`

const LandingHolderRight = styled.div`
display:flex;
flex:1;
align-items:flex-end;
justify-content:flex-end;
`

const NameHolder = styled.div``

const IntroHolder = styled.div`
display:flex;
`
// About

const AboutHolder = styled.div`
display:flex;
width:100%;
height:100vh;
padding:40px;
flex-wrap:wrap;
`

const  AboutHolderLeft = styled.div`
flex:1;
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
flex-wrap:wrap;
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



export default function Home() {

  return (
      <d
  )
}