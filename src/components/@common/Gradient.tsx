import styled from '@emotion/styled'

const Gradient = styled.div<{ from: string; to: string }>`
    display: inline-block;
    color: transparent;

    background-clip: text;
    background-image: ${({ from, to }) =>
        `linear-gradient(90deg, ${from}, ${to});`};

    overflow: hidden;
    background-color: ${({ from }) => from};
`

export default Gradient
