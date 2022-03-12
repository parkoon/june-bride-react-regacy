import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import CameraActionMessage from './CameraActionMessage'
import CameraHandle from './CameraHandle'
import CameraImage from './CameraImage'

const Wrapper = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;
`

type IntroProps = {
    onEnd?(): void
}
function Intro({ onEnd }: IntroProps) {
    const image = useRef<HTMLDivElement>(null)

    const [shooting, setShooting] = useState(false)

    const handleCameraClick = () => {
        if (!image.current) return

        image.current.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 1000,
            easing: 'ease',
            fill: 'forwards',
        })
        const animation = image.current.animate([{ minHeight: '100vh' }], {
            duration: 1000,
            easing: 'ease',
            fill: 'forwards',
            delay: 500,
        })
        window.navigator.vibrate(300)

        animation.addEventListener('finish', () => {
            setShooting(true)
            onEnd?.()
        })
    }

    return (
        <Wrapper>
            <CameraImage ref={image} />

            {!shooting && (
                <>
                    <CameraActionMessage />
                    <CameraHandle onCameraClick={handleCameraClick} />
                </>
            )}
        </Wrapper>
    )
}

export default Intro
