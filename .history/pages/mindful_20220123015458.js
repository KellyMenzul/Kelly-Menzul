import styled from 'styled-components'
import Head from '../comps/Head'
import MenuBar2 from '../comps/MenuBar2'
import ProjectDeliverable from '../comps/ProjectDeliverable'
import Process from '../comps/Proccess'
import RegularButton from '../comps/RegularButton'


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
align-items:center;
justify-content:center;
width:100%;
height:40%;
transition:0.5s;

&:hover {
  width:150%;
}

@media only screen and (max-width: 1500px) {
  &:hover {
    width:200%;
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
}
`

const Mindful = styled.a`
text-decoration:underline;
`


export default function Tinypaws() {
  // const [setup1, setSetup1] =  useState(false)

  // if (setup1 === false) {
  //   setTimeout(() => {
  //     setSetup1(true)
  //   },3000)

  //   return <LoadHolder>
  //     <Load2/>
  //   </LoadHolder>
  // }

  return (
      <Container>
        <MenuHolder>
          <MenuBar2/>
        </MenuHolder>
        <Headholder>
          <Head textalign='center' text='Mindful'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../' buttontext='Go Back'/>
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
          <Process text='There is a negative stigma about talking about mental health in today’s society. People from normalizing having an open discussion about their emotions with others'/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/mindful.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='Mindful is focused on managing the user’s mental health which includes emotions and well-being. It is a companion that encourages improving and maintaining one’s mental state in a healthy approach using mindful reflections.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <ImageTwo src='/survey.png'/>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='We implemented a user profile for customers/hosts/volunteers/employees, a warm color pallette, additional cat resources, an online shop.'/>
        </ProcessHolder>

        <ThankHolder>
          <Head headsize='50px' textalign='center' text='Thanks for viewing Tinypaws!'/>
        </ThankHolder>

        <ButtonHolder>
          <RegularButton link='../' buttontext='Go Back'/>
          <RegularButton link='http://www.kellymenzul.ca/Tinypaws' buttontext='Visit Tinypaws'/>
        </ButtonHolder>

      </Container>
  )
}