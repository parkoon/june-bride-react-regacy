import { CSSProperties, useEffect, useRef } from 'react'
import lottie, { AnimationConfig } from 'lottie-web'

type Props = {
    src: Record<string, unknown>
    size?: number
    style?: CSSProperties
    animationConfig?: Omit<AnimationConfig, 'container'>
}
function Lottie({ src, style, size = 64, animationConfig }: Props) {
    const lottieRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lottieRef.current) {
            const animation = lottie.loadAnimation({
                loop: true,
                container: lottieRef.current,
                autoplay: false,
                animationData: src,
                renderer: 'svg',
                ...animationConfig,
            })

            animation.setSpeed(1)
        }

        return () => lottie.destroy()
    }, [src])

    return (
        <div
            className="inline-flex"
            ref={lottieRef}
            style={{ width: size, height: size, ...style }}
        />
    )
}

export default Lottie
