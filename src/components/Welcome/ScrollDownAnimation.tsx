import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

const bounce = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-10px);
    }
`

const Wrapper = styled.div<{ show: boolean }>`
    display: flex;
    align-items: center;

    color: #636e72;

    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: rotate(-90deg) translate(-100%, -60px);
    opacity: 0;

    ${({ show }) =>
        show &&
        css`
            opacity: 1;
            transform: rotate(-90deg) translate(10px, -60px);
        `}

    transition: 1s;
    transition-delay: 0.7s;
`

const Arrow = styled(MdArrowBack)`
    animation: ${bounce} 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
`

const Text = styled.span`
    display: inline-block;
    font-size: 12px;
    margin-left: 7px;
`

type Props = {
    show: boolean
}
function ScrollDownAnimation({ show }: Props) {
    return (
        <Wrapper show={show}>
            <Arrow />
            <Text>내려주세요</Text>
        </Wrapper>
    )
}

export default ScrollDownAnimation
