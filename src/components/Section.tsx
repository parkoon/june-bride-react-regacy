import { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import colors from '../styles/colors'

const Wrapper = styled.section`
    position: relative;
    padding: 12px 0;

    &::after {
        content: '';

        position: absolute;
        bottom: 0;

        width: 100%;
        height: 1px;
        background-color: ${colors.lightGray};
    }
`
const Title = styled.div`
    font-size: 14px;
    color: ${colors.gray};

    margin-bottom: 8px;
`

type SectionProps = {
    title: string
}
const Section: FunctionComponent<SectionProps> = ({ children, title }) => (
    <Wrapper>
        <Title>{title}</Title>
        {children}
    </Wrapper>
)

export default Section
