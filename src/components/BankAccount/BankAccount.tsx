import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import { getWindowScroll } from '../../utils/window'
import BankAccountInfo from './BankAccountInfo'

const Wrapper = styled.div`
    height: 320vh;

    background: beige;

    position: relative;
`

const Sticky = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
`

type UseSlopeOptions = {
    y: [number, number]
    x: [`${number}%`, `${number}%`]
    wrapper: React.RefObject<HTMLDivElement>
    // eslint-disable-next-line no-unused-vars
    onChange?(v: number): void
    onStart?(): void
    onEnd?(): void
}
export const useSlope = ({
    y: [y1, y2],
    x: [x1, x2],
    wrapper,
    onChange,
    onStart,
    onEnd,
}: UseSlopeOptions) => {
    const [result, setValue] = useState(y1)

    useEffect(() => {
        // 스크롤이 전체 내려갈 수 없으므로, 최대 크기에 반으로 계산한다.
        const wrapperHeight = wrapper.current
            ? wrapper.current.offsetHeight / 2
            : 0
        const startX = wrapperHeight * parseInt(x1, 10) * 0.01
        const endX = wrapperHeight * parseInt(x2, 10) * 0.01

        const handleScroll = () => {
            const moveX = getWindowScroll() - (wrapper.current?.offsetTop || 0)

            if (moveX < startX) {
                setValue(y1)
                onChange?.(y1)
                onStart?.()
                return
            }

            // 기울기
            const m = (y2 - y1) / (endX - startX)

            // 직선 방정식
            const y = m * (moveX - startX) + y1

            if (moveX > endX) {
                setValue(y2)
                onChange?.(y2)
                onEnd?.()
                return
            }

            setValue(y)
            onChange?.(y)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return result
}

const Inner = styled.div`
    clip-path: inset(0 99% 0 0);
`

function BankAccount() {
    const wrapper = useRef<HTMLDivElement>(null)

    const value = useSlope({ wrapper, x: ['0%', '100%'], y: [100, 0] })
    const rotate = useSlope({ wrapper, x: ['0%', '100%'], y: [0, 180] })

    return (
        <Wrapper ref={wrapper}>
            <Sticky>
                <BankAccountInfo secured rotate={rotate} />

                <Inner style={{ clipPath: `inset(0 ${value}% 0 0)` }}>
                    <BankAccountInfo rotate={rotate} />
                </Inner>
            </Sticky>
        </Wrapper>
    )
}

export default BankAccount
