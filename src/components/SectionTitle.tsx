import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import TextRevealAnmiation from './TextRevealAnmiation'

const TitleLetter = styled.span`
    font-weight: bold;
    font-size: 42px;
    line-height: 1.2;
`

function SectionTitle() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    })
    console.log('inView', inView)
    return (
        <div ref={ref}>
            <TextRevealAnmiation
                direction="vertical"
                delay={0.7}
                play={inView}
                items={[
                    <TitleLetter>사</TitleLetter>,
                    <TitleLetter>진갤러리.</TitleLetter>,
                ]}
            />
        </div>
    )
}

export default SectionTitle