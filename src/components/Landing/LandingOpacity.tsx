import styled from '@emotion/styled'
import React from 'react'
import { getLandingHeight } from './helpers'
import { useLandingSlope } from './hooks'

const Wrapper = styled.section<{ height: `${number}px` }>`
    width: 100%;
    height: ${({ height }) => height};
`

type LandingOpacityProps = {
    children: React.ReactNode
}
function LandingOpacity({ children }: LandingOpacityProps) {
    const height = getLandingHeight()

    const value = useLandingSlope({
        x: ['50%', '90%'],
        y: [1, 0],
    })

    return (
        <Wrapper height={`${height}px`} style={{ opacity: value }}>
            {children}
        </Wrapper>
    )
}

export default LandingOpacity
