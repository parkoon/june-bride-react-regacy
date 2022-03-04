import styled from '@emotion/styled'

const SectionParagraph = styled.p<{ reverse?: boolean }>`
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 4px;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(51, 61, 75)')};
`

export default SectionParagraph
