import styled from '@emotion/styled'
import { css } from '@emotion/react'
import useIsScrollTop from '../../hooks/useIsScrollTop'
import Loading from './Loading'
import { mainWidthTransition } from '../../constants/transition'

import WelcomeBrideImage from '../../assets/images/welcome-bride.jpg'
import useFakeLoading from '../../hooks/useFakeLoading'

const Wrapper = styled.section<{ loaded: boolean; full: boolean; src: string }>`
    height: 105vh;
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

    /* background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-repeat: no-repeat; */
`

function Welcome() {
    const loaded = useFakeLoading()
    const isScrollTop = useIsScrollTop()

    return (
        <Wrapper loaded={loaded} full={!isScrollTop} src={WelcomeBrideImage}>
            {!loaded && <Loading />}
        </Wrapper>
    )
}

export default Welcome
