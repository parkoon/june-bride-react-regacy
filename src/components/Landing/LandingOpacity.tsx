import styled from '@emotion/styled'
import React from 'react'
import { useSlope } from './hooks'

const Wrapper = styled.section`
    width: 100%;
    height: 4000px;
`

type LandingOpacityProps = {
    children: React.ReactNode
}
function LandingOpacity({ children }: LandingOpacityProps) {
    const value = useSlope({
        x: ['20%', '80%'],
        y: [1, 0],
    })

    return <Wrapper style={{ opacity: value }}>{children}</Wrapper>
}

export default LandingOpacity
