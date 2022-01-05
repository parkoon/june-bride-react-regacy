import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'

const down = keyframes`
  from {
    transform: translateY(-100%)
}

to{

    transform: translateY(100%)
  }


`

const Wrapper = styled.h1<{ loaded: boolean }>`
    position: absolute;

    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);

    text-transform: uppercase;
    font-size: 72px;
    white-space: nowrap;
    width: 200px;
    ${({ loaded }) =>
        loaded &&
        css`
            opacity: 1;
            /* animation: ${down} 1s ease; */
            transform: translate(-50%, -50%);
        `};
    font-weight: bold;
    transition: 0.5s;
`

const FAKE_LOADING_TIME = 2 * 1000
function WelcomeMessage() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, FAKE_LOADING_TIME)
    }, [])

    return (
        <Wrapper loaded={loaded}>
            초대
            <br />
            합니다.
        </Wrapper>
    )
}

export default WelcomeMessage
