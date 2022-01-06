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
    font-weight: bold;
    transition: transform 0.7s;

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
