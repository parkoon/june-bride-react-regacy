import React, {
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import styled from '@emotion/styled'
import animationData from '../../assets/lottie/like.json'

const Wrapper = styled.div`
    height: 100%;

    position: fixed;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    z-index: 12;

    width: 120px;
`

export type LottieLike = {
    play(): void
}
const Like = forwardRef<LottieLike>((_, ref) => {
    const lottieRef = useRef<HTMLDivElement>(null)

    const animationRef = useRef<AnimationItem>()

    useImperativeHandle(
        ref,
        () => ({
            play() {
                animationRef.current?.play()
            },
        }),
        [animationRef.current]
    )

    useEffect(() => {
        if (lottieRef.current) {
            const animation = lottie.loadAnimation({
                loop: false,
                container: lottieRef.current,
                autoplay: false,
                animationData,
                renderer: 'svg',
            })

            animation.addEventListener('complete', () => {
                animation.stop()
            })

            animationRef.current = animation
        }

        return () => lottie.destroy()
    }, [])

    return <Wrapper ref={lottieRef} />
})

export default Like
