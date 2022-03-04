import styled from '@emotion/styled'

const SectionTitle = styled.h3<{ reverse?: boolean }>`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 13px;
    line-height: 38px;
    color: ${({ reverse }) => (reverse ? '#fff' : 'rgb(25, 31, 40))')};
`
export default SectionTitle
