import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import { createDataset } from './helpers'

const ITEM_COUNT_IN_VIEW = 5

const Wrapper = styled.div``

const Divider = styled.span<{ index: number; x: number; bg: string }>`
    position: absolute;
    width: 3px;
    height: 12px;
    background: ${({ bg }) => bg};
    bottom: 0;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    ${({ index, x }) => css`
        left: ${20 * index}%;
        transform: translateX(${-x}px);
    `}
`

const Line = styled.div<{ bg: string }>`
    position: relative;

    width: 100%;
    height: 3px;

    background: ${({ bg }) => bg};
`

const WheelArea = styled.div`
    display: flex;
    flex-wrap: nowrap;

    margin-bottom: 14px;
`
const Point = styled.span<{ highlighted: string }>`
    display: inline-block;

    color: #bdc3c7;
    text-align: center;

    flex-basis: 20%;
    flex-shrink: 0;

    padding: 10px;

    transition: 0.2s;
    ${({ highlighted }) =>
        highlighted &&
        css`
            transform: scale(1.5);
            font-weight: bold;
            padding-bottom: 15px;
            color: ${highlighted};
        `}
`

/**
 * @see https://htmlcolorcodes.com/color-chart/
 */
const palette: Record<DateType, string> = {
    year: '#148F77',
    month: '#117864',
    day: '#145A32',
    // week: 'red',
}
const suffix: Record<DateType, string> = {
    year: '년',
    month: '월',
    day: '일',
    // week: '요일',
}

type DateType = 'year' | 'month' | 'day'

type DateWheelProps = {
    type?: DateType
    target: number
    length?: number
    delay?: number
    duration?: number
    onFinish?(): void
}
function DateWheel({
    target,
    type = 'year',
    length = 20,
    delay = 0,
    duration = 3.5,
    onFinish,
}: DateWheelProps) {
    const [highlighted, setHighlight] = useState('')

    const wheel = useRef<HTMLDivElement>(null)
    const animation = useRef<Animation>()

    const dataset = React.useMemo(
        () => createDataset(target, length, ITEM_COUNT_IN_VIEW),
        []
    )

    const itemWidth = React.useMemo(
        () => window.innerWidth / ITEM_COUNT_IN_VIEW,
        []
    )

    const handleClick = () => {
        if (!wheel.current) return

        const width = itemWidth * dataset.length - window.innerWidth
        const index = dataset.findIndex((v) => v === target)

        animation.current = wheel.current.animate(
            [
                { transform: 'translateX(0px)' },
                { transform: `translateX(-${width}px)` },
                { transform: 'translateX(0px)' },
                { transform: `translateX(-${width}px)` },
                {
                    transform: `translateX(-${
                        itemWidth * (index - Math.floor(ITEM_COUNT_IN_VIEW / 2))
                    }px)`,
                },
            ],
            {
                duration: duration * 1000,
                easing: 'ease',
                fill: 'forwards',
                delay,
            }
        )

        animation.current.addEventListener('finish', () => {
            setHighlight(palette[type])
            onFinish?.()
        })
    }

    const stopAnimation = () => {
        if (animation.current) {
            animation.current.finish()
        }
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                테스트
            </button>
            <Wrapper onClick={stopAnimation}>
                <WheelArea ref={wheel}>
                    {dataset.map((v) => (
                        <Point
                            key={v}
                            highlighted={(v === target && highlighted) || ''}
                        >
                            {v}
                            {suffix[type]}
                        </Point>
                    ))}
                </WheelArea>
                <Line bg={palette[type]}>
                    {dataset.map((v, index) => {
                        return (
                            <Divider
                                key={v}
                                index={index + 1}
                                x={itemWidth / 2}
                                bg={palette[type]}
                            />
                        )
                    })}
                </Line>
            </Wrapper>
        </>
    )
}

export default DateWheel
