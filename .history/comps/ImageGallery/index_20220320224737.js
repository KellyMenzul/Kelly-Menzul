import styled from "styled-components";
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Holder = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
justify-content:center;
`

const ImageGallery = ({
}) => {
    return <Holder>
    <Box sx={{ width: '100vw', height: '100vh', overflowY: 'scroll',}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

        </Holder>
        
}

const itemData = [
    {
      img: 'drag.png',
      title: 'Bed',
    },
    {
      img: 'femme.png',
      title: 'Books',
    },
    {
      img: 'mockup.PNG',
      title: 'Sink',
    },
    {
      img: 'glossy.png',
      title: 'Chairs',
    },
    {
      img: 'tyler.jpg',
      title: 'Kitchen',
    },
    {
      img: 'jappiano.png',
      title: 'Blinds',
    },
    {
      img: 'goodreads.png',
      title: 'Chairs',
    },
    {
      img: 'cogirduck.png',
      title: 'Chairs',
    },
    {
      img: 'bbm.png',
      title: 'Chairs',
    },
    {
      img: 'aahc.png',
      title: 'Chairs',
    },
    
  ];

export default ImageGallery;