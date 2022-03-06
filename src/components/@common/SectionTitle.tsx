import styled from '@emotion/styled'

const SectionTitle = styled.h3<{ reverse?: boolean; margin?: number }>`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: ${({ margin = 13 }) => `${margin}px`};
    line-height: 38px;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(25, 31, 40))')};
`
export default SectionTitle
