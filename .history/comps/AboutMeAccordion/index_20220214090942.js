import styled from "styled-components";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Holder = styled.div `
display:flex;
flex-direction:
`

const AboutMeAccordion = ({
}) => {
    return <Holder>
      <Accordion style={{backgroundColor:"black", color:"white", borderRadius:'0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontFamily:'textlight'}}>What I do</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily:'textlight'}}>
          I graduated from the Digital Design and Development program at British Columbia Institute of Technology and have spent a large portion of my time working on projects and collaborating with various unique individuals. My main priorities include building dynamic interactive cross platforms that are accessible for users. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black', color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontFamily:'textlight'}}>Things I like</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily:'textlight'}}>
          Other than web development I enjoy working on graphic design projects as well. I have collaborated with small businesses and created design brands and business cards for my past time. Outside of the tech world I enjoy hiking and snowboarding. One of my biggest interests are fashion and spend a lot of time online shopping!
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Holder>
}

export default AboutMeAccordion;