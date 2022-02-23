import styled from '@emotion/styled'
import React from 'react'
import useDecimalFromScroll from '../../hooks/useDecimalFromScroll'

const Wrapper = styled.section`
    width: 100%;
    height: 4000px;
`

type LandingOpacityProps = {
    children: React.ReactNode
}
function LandingOpacity({ children }: LandingOpacityProps) {
    const decimal = useDecimalFromScroll({
        start: 1,
        end: 0,
        triggerPoint: 15,
        height: 4000,
    })

    return <Wrapper style={{ opacity: decimal }}>{children}</Wrapper>
}

export default LandingOpacity
