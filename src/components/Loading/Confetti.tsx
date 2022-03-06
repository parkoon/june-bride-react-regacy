import styled from '@emotion/styled'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const Wrapper = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100vh;
`

function Confetti() {
    useEffect(() => {
        const canvas = document.getElementById(
            'canvas'
        ) as HTMLCanvasElement & {
            confetti: any
        }
        canvas.confetti =
            canvas.confetti ||
            confetti.create(canvas as HTMLCanvasElement, { resize: true })

        canvas.confetti({
            spread: 70,
            // origin: { y: 1.2 },
        })
    }, [])

    return <Wrapper id="canvas" />
}

export default Confetti
