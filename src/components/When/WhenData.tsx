import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import BouncingHeart from '../Lottie/BouncingHeart'

const Wrapper = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    color: #fff;

    padding: 52px 24px 62px 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
`

const Animate = styled.div<{ visible: boolean; delay?: number }>`
    transform: translateY(40px);

    transition: 0.5s ease;
    opacity: 0;
    ${({ visible, delay }) =>
        visible &&
        css`
            opacity: 1;
            transform: translateY(0px);
            transition-delay: ${delay}s;
        `}
`

const Header = styled.div`
    display: flex;
    align-items: flex-end;
`

const Name = styled.span`
    font-size: 18px;
    font-weight: bold;
`
const GroomName = styled(Name)`
    min-width: 124px;
    text-align: left;
`
const BrideName = styled(Name)`
    min-width: 58px;
    text-align: right;
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: #fff;
`

const Date = styled.div`
    font-weight: bold;
    font-size: 32px;
`

const Content = styled.div`
    div {
        display: flex;
        align-items: center;
        margin-top: 2px;
    }
`

const Footer = styled.div`
    margin-top: 32px;

    p {
        margin-top: 7px;
        line-height: 18px;
    }
`

type WhenDataProps = {
    visible: boolean
}
function WhenData({ visible }: WhenDataProps) {
    return (
        <Wrapper>
            <Animate visible={visible}>
                <Header>
                    <GroomName>
                        PARK <br />
                        JONG HYEOK
                    </GroomName>
                    <Divider />
                    <BrideName>
                        KIM <br />
                        JIN A
                    </BrideName>
                </Header>
            </Animate>
            <div>
                <Animate visible={visible} delay={0.3}>
                    <Content>
                        <Date>06.18 토요일</Date>
                        <div>
                            <BouncingHeart />
                            결혼식까지 20일 남았습니다.
                        </div>
                    </Content>
                </Animate>
                <Footer>
                    <Animate visible={visible} delay={0.6}>
                        2022년 6월 18일 토요일 오후 2시 <br />
                        <p>
                            서울특별시 강동구 천호대로 1077 이스트센트럴타워
                            35~36층
                        </p>
                    </Animate>
                </Footer>
            </div>
        </Wrapper>
    )
}

export default React.memo(WhenData)
