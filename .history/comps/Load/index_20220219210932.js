import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';


const Container = styled.div`
    width:${props=>props.width};
    z-index:-20;
`

// const Buttons = styled.button``
var anim = null;


const Load = ({
    width="200%"
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