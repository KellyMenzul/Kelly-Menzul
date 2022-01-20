import Image from 'next/image'
import styled from 'styled-components'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'
import Intro from '../comps/Intro'
import Head from '../comps/Head'
import { style } from '@mui/system'


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
width:100%;
height:100vh;
padding:40px;
flex-wrap:wrap;
`
const  WorkHolderLeft = styled.div`
display:flex;
flex:1;
`
const  WorkHolderLeft = styled.div`


const  WorkHolderRight = styled.div`
flex:1;
display:flex;
`


export default function Home() {
  return (
    <Holder>
      <MenuHolder>
        <MenuBar/>
      </MenuHolder>
      

      <LandingHolder id='landing'>
        <LandingHolderLeft>
          <NameHolder>
            <Name/>
            <Position topmargin='-160px'/>
          </NameHolder>
        </LandingHolderLeft>

        <LandingHolderRight>
          <IntroHolder>
           <Intro/>
          </IntroHolder>
        </LandingHolderRight>
      </LandingHolder>

      <AboutHolder id='about'>
        <AboutHolderLeft></AboutHolderLeft>
        <AboutHolderRight>
            <AboutMeHolder>
              <Head text='Hi there!'/>
              <Position fontsize='24px' text='My name is Kelly and I am a front-end developer and UX/UI Designer! I like to create online platforms and easy to use interface designs. My passion started when I took a digital media class in high school, and from there I developed an interest in development and design which has lead me to where I am today.'/>
              <Position fontsize='24px' text='I graduated from the Digital Design and Development program at British Columbia Institute of Technology and have spent a large portion of my time working on projects and collaborating with various unique individuals. My main priorities include building dynamic interactive cross platforms that are accessible for users.'/>
              <Position fontsize='24px' text='Other than web development I enjoy working on graphic design projects as well. I have collaborated with small businesses and created design brands and business cards for my past time. Outside of the tech world I enjoy hiking and snowboarding. One of my biggest interests are fashion and spend a lot of time online shopping!'/>
            </AboutMeHolder>
        </AboutHolderRight>
      </AboutHolder>

      <WorkHolder id='work'>
        <WorkHolderLeft></WorkHolderLeft>
        <WorkHolderRight></WorkHolderRight>
        


      </WorkHolder>

      

    </Holder>
  )
}
