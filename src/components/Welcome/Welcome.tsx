import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import WelcomeMessage from './WelcomeMessage'
import ScrollDownAnimation from './ScrollDownAnimation'

const Wrapper = styled.section<{ loaded: boolean }>`
    height: 100vh;
    width: 100vw;
    background: beige;

    ${({ loaded }) =>
        loaded &&
        css`
            width: 50vw;
        `}

    transition: .5s;
`

const FAKE_LOADING_TIME = 2 * 1000
function Welcome() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, FAKE_LOADING_TIME)
    }, [])

    return (
        <Wrapper loaded={loaded}>
            {!loaded && '로딩애니매이션'}
            <WelcomeMessage />
            {loaded && <ScrollDownAnimation />}
        </Wrapper>
    )
}

export default Welcome
