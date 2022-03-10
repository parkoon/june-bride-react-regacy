import styled from '@emotion/styled'
import { useLandingSlope } from './hooks'

const Wrapper = styled.p`
    position: fixed;
    top: 120px;

    width: 100%;

    font-size: 32px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    letter-spacing: 1px;

    font-weight: bold;
`
function LandingIntroMessage() {
    const opacity = useLandingSlope({ x: ['0%', '10%'], y: [1, 0] })
    return (
        <Wrapper style={{ opacity }}>
            어떤 말을 쓸지 <br />
            생각이 안나는데 <br />
            괜찮으시겠어요?
        </Wrapper>
    )
}

export default LandingIntroMessage
