import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { getWindowScroll } from '../../utils/window'
import WhenInfo from './WhenInfo'
import WhenMessage from './WhenMessage'

type UseSlopeOptions = {
    y: [number, number]
    x: [`${number}%`, `${number}%`]
    wrapper: React.RefObject<HTMLDivElement>
    // eslint-disable-next-line no-unused-vars
    onChange?(v: number): void
}
export const useSlope = ({
    y: [y1, y2],
    x: [x1, x2],
    wrapper,
    onChange,
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
                return
            }

            // 기울기
            const m = (y2 - y1) / (endX - startX)

            // 직선 방정식
            const y = m * (moveX - startX) + y1

            if (moveX > endX) {
                setValue(y2)
                onChange?.(y2)
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

const Wrapper = styled.div`
    height: 300vh;
`

function When() {
    return (
        <Wrapper>
            <WhenMessage />
            <WhenInfo />
        </Wrapper>
    )
}

export default When
