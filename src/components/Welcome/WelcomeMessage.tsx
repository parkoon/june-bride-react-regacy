import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.h1<{ loaded: boolean; posRight: boolean }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-size: 72px;
    opacity: 0;

    color: #dfe6e9;

    ${({ loaded }) =>
        loaded &&
        css`
            opacity: 1;
        `};

    ${({ posRight }) =>
        posRight &&
        css`
            transform: translateX(50%);
        `}
    font-weight: bold;
    transition: 0.3s;
`

type Props = {
    loaded: boolean
    posRight: boolean
}
function WelcomeMessage(props: Props) {
    return (
        <Wrapper {...props}>
            초대
            <br />
            합니다.
        </Wrapper>
    )
}

export default WelcomeMessage
