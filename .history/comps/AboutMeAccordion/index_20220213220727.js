import styled from "styled-components";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Holder = styled.div `
display:flex;
flex-direction:column;
width:100%;
`

const AboutMeAccordion = ({
}) => {
    return <Holder>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What I do</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I graduated from the Digital Design and Development program at British Columbia Institute of Technology and have spent a large portion of my time working on projects and collaborating with various unique individuals. My main priorities include building dynamic interactive cross platforms that are accessible for users. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Things I like</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Holder>
        
}

export default AboutMeAccordion;