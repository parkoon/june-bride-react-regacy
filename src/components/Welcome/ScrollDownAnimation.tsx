import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import React from 'react'

const bounce = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-10px);
        }
`

const Wrapper = styled.div`
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: rotate(-90deg) translateY(-60px);
`

const Arrow = styled.span`
    display: inline-block;
    animation: ${bounce} 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
`
function ScrollDownAnimation() {
    return (
        <Wrapper>
            <Arrow>*</Arrow>
            <span>arrow</span>
        </Wrapper>
    )
}

export default ScrollDownAnimation
