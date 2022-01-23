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
}
`

const Mindful = styled.a`
text-decoration:underline;
`


export default function FrankOcean() {
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
          <Head textalign='center' text='Frank Ocean'/>
        </Headholder>

        <ButtonHolder2>
          <RegularButton link='../#work' buttontext='Go Back'/>
          <RegularButton link='http://www.kellymenzul.ca/frankocean/' buttontext='Visit Frank Ocean'/>
        </ButtonHolder2>

        <ImageHolder>
          <ImageOne src='/frank.png'/>
        </ImageHolder>

        <DeliverableHolder>
          <ProjectDeliverable projecttext='This website is about Frank Ocean who is an American songwriter, it would includes about him, his music, albums, and his lyrics. It displays some of his best works and lyrics for people to see. The website is meant to give the user new music discoveries and inspiration or for fans to come and appreciate more of his art.'
          delivetext='Wordpress'
          teamtext='Kelly Menzul'
          />
        </DeliverableHolder>

        <ProcessHolder>
          <Process head='The Ideation' text='create a website that is a safe space to possibly help someone who is going through tough situations and use music as a way to feel better and resonate with his lyrics.'/>
        </ProcessHolder>

        <ImageHolder>
          <ImageTwo src='/frankocean.png'/>
        </ImageHolder>

        <ProcessHolder>
          <Process head='The Proces' text='Mindful is focused on managing the user’s mental health which includes emotions and well-being. It is a companion that encourages improving and maintaining one’s mental state in a healthy approach using mindful reflections.'/>
        </ProcessHolder>

        <ImageHolderPer>
          <ImageTwo src='/survey.png'/>
        </ImageHolderPer>

        <ProcessHolder>
          <Process head='The Solution' text='Mindful is an application with features such as the journal section, infinite jokes card, chat system (coming soon), and breathe tool'/>
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