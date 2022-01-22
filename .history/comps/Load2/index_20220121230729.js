import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';


const Container = styled.div`
    width:100%;
`

// const Buttons = styled.button``
var anim = null;


const Load2 = ({}) => {
    const container = useRef(null)

    useEffect(() => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData: require('../../public/load2.json')
            
        })
        lottie.setSpeed(0.5);
    }, [])

    return <Container>
        <div className="container" ref={container}></div>
    </Container>
}

export default Load2;