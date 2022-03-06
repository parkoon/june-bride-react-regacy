import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.span`
    animation: wave 2.5s infinite;
    transform-origin: 65% 65%;

    display: inline-block;
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(16deg);
        }
        20% {
            transform: rotate(-6deg);
        }
        30% {
            transform: rotate(16deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(16deg);
        }
        60% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`

function WavingHand() {
    return <Wrapper>👋</Wrapper>
}

export default WavingHand
