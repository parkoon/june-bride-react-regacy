/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import styled from '@emotion/styled'

type Props = {
    items: React.ReactNode[]
    delay?: number
    direction?: 'horizontal' | 'vertical'
    play?: boolean
    once?: boolean
}

const Wrapper = styled.div`
    overflow: hidden;
`

const Text = styled.p<Pick<Props, 'direction'>>`
    display: inline-block;
    opacity: 0;
    transform: ${({ direction }) =>
        direction === 'vertical' ? 'translateY(100%)' : 'translateX(-100%)'};
`

function TextRevealAnimation({
    items,
    delay,
    direction = 'vertical',
    play = true,
    once = false,
}: Props) {
    const ref = useRef<HTMLSpanElement[]>([])
    const animateOnMountAtOnce = useRef(false)

    useEffect(() => {
        if (ref.current && play) {
            gsap.to(ref.current, {
                ...(direction === 'vertical' ? { y: 0 } : { x: 0 }),
                duration: 0.7,
                stagger: 0.3,
                opacity: 1,
                delay,
            })

            animateOnMountAtOnce.current = once
        }
    }, [direction, play])

    if (!play && !animateOnMountAtOnce) return null

    return (
        <>
            {items.map((item, index) => (
                <Wrapper>
                    <Text
                        key={index}
                        ref={(el) => (ref.current[index] = el!)}
                        direction={direction}
                    >
                        {item}
                    </Text>
                </Wrapper>
            ))}
        </>
    )
}

export default TextRevealAnimation
