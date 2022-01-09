import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.h2`
    position: relative;

    font-size: 24px;
    font-weight: bold;

    line-height: 1.2;
    margin: 30px 0 32px 0;

    &::before,
    &::after {
        content: '<h2>';
        font-family: 'La Belle Aurore', cursive;
        color: #515152;
        font-size: 12px;
        position: absolute;
    }

    &::before {
        top: -14px;
        left: -12px;
    }

    &::after {
        bottom: -17px;
        left: -12px;
    }
`

type Props = {
    children: React.ReactNode
}
function Heading2({ children }: Props) {
    return <Wrapper>{children}</Wrapper>
}

export default Heading2
