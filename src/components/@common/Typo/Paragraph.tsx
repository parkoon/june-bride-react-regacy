import styled from '@emotion/styled'

const Paragraph = styled.p<{ reverse?: boolean; margin?: number }>`
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 4px;
    font-weight: 400;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(51, 61, 75)')};

    margin-bottom: ${({ margin = 25 }) => `${margin}px`};
`

export default Paragraph
