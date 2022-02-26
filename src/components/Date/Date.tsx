import styled from '@emotion/styled'
import React from 'react'
import DateWheel from './DateWheel'

const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 42px;
`

function Date() {
    return (
        <Wrapper>
            <DateWheel type="year" target={2022} />
            <DateWheel type="month" target={6} length={12} />
            <DateWheel type="day" target={18} />
        </Wrapper>
    )
}

export default Date
