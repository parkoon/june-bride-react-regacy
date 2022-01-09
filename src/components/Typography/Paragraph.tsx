import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.p`
    position: relative;
    line-height: 1.2;

    margin: 30px 0;

    &::before,
    &::after {
        content: '<p>';
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
function Paragraph({ children }: Props) {
    return <Wrapper>{children}</Wrapper>
}

export default Paragraph
