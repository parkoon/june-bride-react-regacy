import styled from '@emotion/styled'

const Paragraph = styled.p<{ reverse?: boolean }>`
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 4px;
    font-weight: 400;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(51, 61, 75)')};
`

export default Paragraph
