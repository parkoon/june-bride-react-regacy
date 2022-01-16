import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import ScrollDownAnimation from './ScrollDownAnimation'
import useScrollTopEffect from '../../hooks/useIsScrollTop'
import Loading from './Loading'
import { titleTransition, widthTransition } from '../../constants/transition'

import WelcomeBrideImage from '../../assets/images/welcome-bride.jpg'

const Wrapper = styled.section<{ loaded: boolean; full: boolean }>`
    height: 105vh;
    width: 100vw;
    background: #000;

    color: #fff;

    ${({ loaded }) =>
        loaded &&
        css`
            width: 50vw;
        `}

    ${({ full }) =>
        full &&
        css`
            width: 100vw;
        `}
    transition: ${widthTransition};
`

const Message = styled.h1<{ loaded: boolean; full: boolean }>`
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

    ${({ full }) =>
        full &&
        css`
            transform: translateX(50%);
        `}
    font-weight: bold;
    transition: ${titleTransition};
`

const FAKE_LOADING_TIME = (3.5 * 1000) / 3.5
function Welcome() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, FAKE_LOADING_TIME)
    }, [])

    const isScrollTop = useScrollTopEffect()

    const showArrowAnimation = loaded && isScrollTop

    return (
        <Wrapper loaded={loaded} full={!isScrollTop}>
            {!loaded && <Loading />}
            <Message loaded={loaded} full={!isScrollTop}>
                초대
                <br />
                합니다.
            </Message>
            <ScrollDownAnimation show={showArrowAnimation} />
        </Wrapper>
    )
}

export default Welcome
