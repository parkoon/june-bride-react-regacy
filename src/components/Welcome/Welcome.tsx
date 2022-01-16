import styled from '@emotion/styled'
import { css } from '@emotion/react'
import useIsScrollTop from '../../hooks/useIsScrollTop'
import Loading from './Loading'
import { mainWidthTransition } from '../../constants/transition'

import WelcomeBrideImage from '../../assets/images/welcome-bride.jpg'
import useFakeLoading from '../../hooks/useFakeLoading'
import Greeting from './Greeting'

const Wrapper = styled.section<{ loaded: boolean; full: boolean; src: string }>`
    position: relative;
    height: 135vh;
    width: 100vw;
    background: #000;

    color: #fff;

    ${({ loaded }) =>
        loaded &&
        css`
            transform: translateX(-50%);
        `}

    ${({ full }) =>
        full &&
        css`
            transform: translateX(0);
        `}
    transition: ${mainWidthTransition};

    &::after {
        content: '';
        position: absolute;
        background-image: ${({ src }) => `url(${src})`};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top left;

        width: 100%;
        height: 100vh;
    }

    &::before {
        content: '';
        position: absolute;
        z-index: 1;
        bottom: 35vh;
        left: 0;
        pointer-events: none;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 90%
        );
        width: 100%;
        height: 20px;
    }
`

function Welcome() {
    const loaded = useFakeLoading()
    const isScrollTop = useIsScrollTop()

    const showGreeting = loaded && !isScrollTop

    return (
        <Wrapper loaded={loaded} full={!isScrollTop} src={WelcomeBrideImage}>
            {!loaded && <Loading />}

            {showGreeting && <Greeting />}
        </Wrapper>
    )
}

export default Welcome
