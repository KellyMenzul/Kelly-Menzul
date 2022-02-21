import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';


const Container = styled.div`
    width:${props=>props.width};
    position:absolute;
    z-index:-20;

    @media only screen and (max-width: 600px) {
        bottom:-500px;
        left:-200px;
      }
`

// const Buttons = styled.button``
var anim = null;


const Load = ({
    width="100%"
}) => {
    const container = useRef(null)

    useEffect(() => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData: require('../../public/load.json')
            
        })
        lottie.setSpeed(0.1);
    }, [])

    return <Container width={width}>
        <div className="container" ref={container}></div>
    </Container>
}

export default Load;