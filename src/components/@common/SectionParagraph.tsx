import styled from '@emotion/styled'

const SectionParagraph = styled.p<{ reverse?: boolean; bold?: boolean }>`
    font-size: 17px;
    line-height: 24px;
    margin-bottom: 4px;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(51, 61, 75)')};
`

export default SectionParagraph
