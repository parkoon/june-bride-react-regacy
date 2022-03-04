import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import SectionParagraph from '../@common/SectionParagraph'
import SectionTitle from '../@common/SectionTitle'
import MapActionSheet from './MapActionSheet'
import MapKaKao from './MapKaKao'
import SubwayLineBadge from './SubwayLineBadge'

const Wrapper = styled.section`
    padding: 96px 20px 72px 20px;
`
const Highlight = styled.span`
    color: #e74c3c;
`

function Map() {
    const { ref, inView } = useInView({ threshold: 0.6 })

    return (
        <Wrapper ref={ref}>
            <SectionTitle>잠실에서 10분 거리</SectionTitle>
            <SectionParagraph>
                <SubwayLineBadge />
                강동역 1번 출구에서 <Highlight>16m</Highlight>
            </SectionParagraph>

            <MapKaKao visible={inView} />
            <MapActionSheet visible={inView} />
        </Wrapper>
    )
}

export default Map
