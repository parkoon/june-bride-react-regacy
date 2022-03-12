import styled from '@emotion/styled'
import { useLandingSlope } from './hooks'

const Wrapper = styled.p`
    position: fixed;
    top: 120px;

    width: 100%;

    font-size: 28px;
    color: #fff;
    text-align: center;
    line-height: 42px;
    letter-spacing: 1px;

    font-weight: bold;
`
function LandingIntroMessage() {
    const opacity = useLandingSlope({ x: ['0%', '10%'], y: [1, 0] })
    return (
        <Wrapper style={{ opacity }}>
            김근태님을 <br />
            박종혁 김진아 결혼식에 <br />
            초대합니다.
        </Wrapper>
    )
}

export default LandingIntroMessage
