import styled from '@emotion/styled'
import { Heading2, Paragraph } from '../Typography'
import Map from './Map'

const Wrapper = styled.section``
const Header = styled.div`
    padding: 0 20px;
`

function WayToCome() {
    return (
        <Wrapper>
            <Header>
                <Heading2>
                    소중한 당신을 <br /> 초대합니다
                </Heading2>
                <Paragraph>
                    서울특별시 강동구 천호대로 1077 이스트센트럴타워 35~36층
                </Paragraph>
                <Paragraph>02-6956-0230</Paragraph>
            </Header>

            <Map />
        </Wrapper>
    )
}

export default WayToCome
