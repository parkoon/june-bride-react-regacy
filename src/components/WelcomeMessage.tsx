import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { titleTransition } from '../constants/transition'
import useFakeLoading from '../hooks/useFakeLoading'
import useIsScrollTop from '../hooks/useIsScrollTop'

const Wrapper = styled.h1<{ loaded: boolean; full: boolean }>`
    position: absolute;

    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-size: 72px;
    opacity: 0;

    z-index: 1;

    color: #dfe6e9;

    ${({ loaded }) =>
        loaded &&
        css`
            opacity: 1;
        `};

    ${({ full }) =>
        full &&
        css`
            transform: translateX(50%);
        `}
    font-weight: bold;
    transition: ${titleTransition};
`

function WelcomeMessage() {
    const loaded = useFakeLoading()
    const isScrollTop = useIsScrollTop()

    return (
        <Wrapper loaded={loaded} full={!isScrollTop}>
            초대
            <br />
            합니다.
        </Wrapper>
    )
}

export default WelcomeMessage
