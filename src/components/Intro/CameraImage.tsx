import styled from '@emotion/styled'
import { forwardRef } from 'react'
import LadingWallpaper from '../../assets/images/landing.jpg'

const Wrapper = styled.div<{ scale?: number; src: string }>`
    width: 100%;

    min-height: 50vh;
    flex: 1;

    background-image: ${({ src }) => `url(${src})`};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`

const CameraImage = forwardRef<HTMLDivElement>((_, ref) => {
    return <Wrapper ref={ref} src={LadingWallpaper} />
})

export default CameraImage
