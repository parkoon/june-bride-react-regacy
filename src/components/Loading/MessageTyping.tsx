import styled from '@emotion/styled'
import React, { memo, useState } from 'react'
import { useTyping } from './hooks'
import WavingHand from './WavingHand'

const Wrapper = styled.p`
    &::after {
        content: '|';
        animation: blink 1s step-start infinite;
    }

    color: #fff;
    font-size: 24px;

    text-align: center;
    line-height: 38px;
    word-break: keep-all;

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`

type MessageTypingProps = {
    onFinish?(): void
}
function MessageTyping({ onFinish }: MessageTypingProps) {
    const [waving, setWaving] = useState(false)

    const typedSuperpower = useTyping([
        {
            value: '김근태님 안녕하세요. ',
            pause: 2000,
            onFinish: () => setTimeout(() => setWaving(true), 150),
            onDelete: () => setWaving(false),
        },
        {
            value: '바쁜 시간 내주셔서 감사합니다.',
        },
        {
            value: '박종혁 ♥ 김진아 결혼식에 초대합니다.',
            onFinish,
            pause: 1000,
        },
    ])

    return (
        <Wrapper>
            {typedSuperpower}
            {waving && <WavingHand />}
        </Wrapper>
    )
}

export default memo(MessageTyping)
