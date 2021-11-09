import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FunctionComponent, useRef, MouseEvent, useState } from 'react'

const rippleEffect = keyframes`
    to {
      transform: scale(4);
      opacity: 0;
    }
  `
const Wrapper = styled.div`
    position: relative;
    overflow: hidden;

    span.ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ${rippleEffect} 0.8s linear;
        background-color: #ecf0f1;
    }
`

const StyledRipple = styled.span`
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${rippleEffect} 0.8s linear;
    background-color: #ecf0f1;
`

type RippleWrapperProps = {
    afterEffect?(): void
}

type RippleMetrics = {
    left: number
    top: number
    width: number
    height: number
    updated: number
}

const RippleWrapper: FunctionComponent<RippleWrapperProps> = ({
    children,
    afterEffect,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [metrics, setMetrics] = useState<RippleMetrics>({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        updated: Date.now(),
    })

    const createRipple = (event: MouseEvent) => {
        const wrapper = wrapperRef.current!

        const diameter = Math.max(wrapper.clientWidth, wrapper.clientHeight)
        const radius = diameter / 2

        setMetrics({
            width: diameter,
            height: diameter,
            left: event.clientX - wrapper.offsetLeft - radius,
            top: event.clientY - wrapper.offsetTop - radius,
            updated: Date.now(),
        })
    }

    return (
        <Wrapper ref={wrapperRef} onClick={createRipple}>
            {children}
            <StyledRipple
                key={metrics.updated}
                style={{
                    ...metrics,
                }}
                onAnimationEnd={afterEffect}
            />
        </Wrapper>
    )
}

export default RippleWrapper
