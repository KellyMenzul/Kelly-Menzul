import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';


const Container = styled.div`
    max-width:50%;
`

// const Buttons = styled.button``
var anim = null;


const Load = ({}) => {
    const container = useRef(null)

    useEffect(() => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData: require('../../public/load.json')
            
        })
        lottie.setSpeed(1);
        setTimeout(() => {
            anim.pause()
        }, 61000);
    }, [])

    return <Container>
        <div className="container" ref={container}></div>
    </Container>
}

export default Load;