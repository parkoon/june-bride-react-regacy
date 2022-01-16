import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { titleTransition } from '../constants/transition'
import useFakeLoading from '../hooks/useFakeLoading'
import useIsScrollTop from '../hooks/useIsScrollTop'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow-x: hidden;
`
const Title = styled.h1<{ loaded: boolean; full: boolean }>`
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
            transform: translateX(75%);
        `}
    font-weight: bold;
    transition: ${titleTransition};
`

function WelcomeMessage() {
    const loaded = useFakeLoading()
    const isScrollTop = useIsScrollTop()

    return (
        <Wrapper>
            <Title loaded={loaded} full={!isScrollTop}>
                초대
                <br />
                합니다.
            </Title>
        </Wrapper>
    )
}

export default WelcomeMessage
