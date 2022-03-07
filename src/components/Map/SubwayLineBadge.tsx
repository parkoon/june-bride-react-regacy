import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const slide = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(200%);
    }
`

const Wrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: relative;

    overflow: hidden;

    background: #8854d0;
    color: #fff;

    border-radius: 50%;
    width: 20px;
    height: 20px;

    margin-right: 5px;

    font-size: 15px;

    /* Shine */
    &:after {
        content: '';
        top: 0;
        transform: translateX(100%);
        width: 100%;
        height: 220px;
        position: absolute;
        z-index: 1;
        animation: ${slide} 2s infinite;

        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(128, 186, 232, 0) 99%,
            rgba(125, 185, 232, 0) 100%
        ); /* W3C */
    }
`

function SubwayLineBadge() {
    return <Wrapper>5</Wrapper>
}

export default SubwayLineBadge
