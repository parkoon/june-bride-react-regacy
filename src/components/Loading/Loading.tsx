import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import Confetti from './Confetti'
import MessageTyping from './MessageTyping'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* 다음에 위치하고 있는 fixed 컴포넌트인 Landing 보다 위에 위치하기 위해서 z-index 를 2로 설정  */
    z-index: 2;

    height: 100vh;

    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #000;
`

function Loading() {
    const [loaded, setLoaded] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        if (loaded) {
            ref.current.animate([{ opacity: 0 }], {
                duration: 2 * 1000,
                easing: 'ease',
                fill: 'forwards',
                delay: 1.2 * 1000,
            })
        }
    }, [loaded])
    return (
        <Wrapper ref={ref}>
            {loaded && <Confetti />}
            <MessageTyping onFinish={() => setLoaded(true)} />
        </Wrapper>
    )
}

export default Loading
