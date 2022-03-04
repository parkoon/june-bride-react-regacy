import styled from '@emotion/styled'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import FlipCountdown from '../@common/FlipCountdown'
import SectionParagraph from '../@common/SectionParagraph'
import SectionTitle from '../@common/SectionTitle'
import TextCover from '../@common/TextCover'

const Wrapper = styled.div`
    position: relative;
    min-height: 640px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    padding: 62px 20px;
    height: 100%;
`

function WhenInfo() {
    const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true })

    return (
        <Wrapper ref={ref}>
            <TextCover visible={inView} />
            <Content>
                <div>
                    <SectionTitle reverse>
                        2022년 6월 18일,
                        <br /> 토요일 12시 30분
                    </SectionTitle>
                    <SectionParagraph reverse>
                        서울특별시 강동구 천호대로 1077 이스트센트럴타워 35~36층
                    </SectionParagraph>
                </div>
                {inView && <FlipCountdown />}
            </Content>
        </Wrapper>
    )
}

export default WhenInfo
