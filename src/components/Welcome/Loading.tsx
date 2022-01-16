import React, { useEffect, useRef } from 'react'
// import lottie, { Options } from 'react-lottie'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import animationData from '../../assets/lottie/wedding.json'

const Wrapper = styled.div`
    height: 100%;
`

function Loading() {
    const lottieRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lottieRef.current) {
            const animation = lottie.loadAnimation({
                loop: true,
                container: lottieRef.current,
                autoplay: true,
                animationData,
                renderer: 'svg',
            })

            animation.setSpeed(2)

            animation.addEventListener('loopComplete', () => {})
        }

        return () => lottie.destroy()
    }, [])

    return <Wrapper ref={lottieRef} />
}

export default Loading
