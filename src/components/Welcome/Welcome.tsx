import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import WelcomeMessage from './WelcomeMessage'
import ScrollDownAnimation from './ScrollDownAnimation'
import useScrollTopEffect from '../../hooks/useIsScrollTop'
import Loading from './Loading'

const Wrapper = styled.section<{ loaded: boolean; full: boolean }>`
    height: calc(100vh);
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
    transition: 0.7s;
`

const FAKE_LOADING_TIME = 3.5 * 1000
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
            <WelcomeMessage loaded={loaded} posRight={!isScrollTop} />
            <ScrollDownAnimation show={showArrowAnimation} />
        </Wrapper>
    )
}

export default Welcome
