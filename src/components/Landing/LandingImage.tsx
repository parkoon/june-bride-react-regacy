import styled from '@emotion/styled'
import { useLandingSlope } from './hooks'
import LadingWallpaper from '../../assets/images/landing.jpg'

const Wrapper = styled.div<{ scale?: number; src: string }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-image: ${({ src }) => `url(${src})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`

function LandingImage() {
    const value = useLandingSlope({
        y: [1, 1.3],
        x: ['0%', '30%'],
    })

    return (
        <Wrapper
            style={{ transform: `scale(${value})` }}
            src={LadingWallpaper}
        />
    )
}

export default LandingImage
