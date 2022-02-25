import styled from '@emotion/styled'
import { useSlope } from './hooks'

const Wrapper = styled.div<{ scale?: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-image: url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`

function LandingImage() {
    const value = useSlope({
        y: [1, 1.3],
        x: ['0%', '30%'],
    })

    return <Wrapper style={{ transform: `scale(${value})` }} />
}

export default LandingImage
