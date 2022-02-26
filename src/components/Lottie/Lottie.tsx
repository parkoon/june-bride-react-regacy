import { CSSProperties, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

type Props = {
    src: Record<string, unknown>
    size?: number
    style?: CSSProperties
}
function Lottie({ src, style, size = 64 }: Props) {
    const lottieRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lottieRef.current) {
            const animation = lottie.loadAnimation({
                loop: true,
                container: lottieRef.current,
                autoplay: true,
                animationData: src,
                renderer: 'svg',
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
