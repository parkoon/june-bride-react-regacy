import styled from '@emotion/styled'
import React from 'react'
import useTransformOpacity from '../../hooks/useTranformOpacity'

const Wrapper = styled.div`
    position: fixed;
    top: 120px;

    text-align: center;

    p {
        font-size: 15px;
        line-height: 24px;
        color: #fff;

        padding: 0 27px;
        font-weight: 400;

        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`

type ParagraphProps = {
    children: React.ReactNode
    triggerPoint: `${number}%`
}
function Paragraph({ children, triggerPoint }: ParagraphProps) {
    const { y, opacity } = useTransformOpacity({
        trigger: { height: 4000, y: triggerPoint },
    })

    return (
        <p style={{ transform: `translateY(${y}px)`, opacity }}>{children}</p>
    )
}

function LandingMessage() {
    return (
        <Wrapper>
            <Paragraph triggerPoint="20%">
                부디, 저희 두 사람의 결혼소식이 <br />
                여러분들의 마음속 불편한 짐이 아닌 <br />
                즐거운 소식으로 느껴지길 바랍니다.
            </Paragraph>
            <Paragraph triggerPoint="25%">
                결혼을 축복해주셔서 감사합니다.
            </Paragraph>
            <Paragraph triggerPoint="30%">
                또, 심란한 와중에도 귀한 발걸음 해주시는
                <br /> 하객 여러분들께도. 미리 감사의 인사를 전합니다.
            </Paragraph>
        </Wrapper>
    )
}

export default LandingMessage
