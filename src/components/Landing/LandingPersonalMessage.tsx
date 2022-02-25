import styled from '@emotion/styled'
import { useSlope } from './hooks'

const Wrapper = styled.p`
    position: fixed;
    top: 120px;

    width: 100%;

    font-size: 32px;
    color: #fff;
    text-align: center;
    line-height: 45px;
`
function LandingPersonalMessage() {
    const opacity = useSlope({ x: ['0%', '10%'], y: [1, 0] })
    return (
        <Wrapper style={{ opacity }}>
            김진아 님 <br />
            바쁜 시간 내주셔서 <br />
            감사합니다.
        </Wrapper>
    )
}

export default LandingPersonalMessage
