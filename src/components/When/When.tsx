import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import GhostIcon from '../../assets/svg/ghost.svg'
import { getWindowScroll } from '../../utils/window'
import WhenData from './WhenData'
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
    height: 200vh;
    position: relative;

    margin: 0 24px;

    img {
        position: fixed;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 50%;
    }
`

const Image = styled.div<{ scale?: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-image: url('https://images.unsplash.com/photo-1604881990409-b9f246db39da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`

function When() {
    const [show, setShow] = useState(false)

    const ref = React.useRef<HTMLDivElement>(null)
    const value = useSlope({
        x: ['10%', '60%'],
        y: [1, 70],

        wrapper: ref,
    })
    const opacity = useSlope({
        x: ['0%', '15%'],
        y: [0, 1],

        wrapper: ref,
    })

    const opacity2 = useSlope({
        x: ['20%', '100%'],
        y: [0, 0.8],
        wrapper: ref,
        onChange(v) {
            setShow(v > 0.7)
        },
    })

    return (
        <Wrapper ref={ref}>
            <WhenMessage />

            <img
                src={GhostIcon}
                alt=""
                width={64}
                style={{
                    transform: `scale(${value})`,
                    opacity,
                }}
            />
            <Image style={{ opacity: opacity2 }} />
            <WhenData visible={show} />
        </Wrapper>
    )
}

export default When
