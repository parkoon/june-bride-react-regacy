import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

/**
 * @see https://react-slick.neostack.com/docs/api/
 */
const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
}

const FRAME_WIDTH = 10
const FRAME_SPACE = 20
const WRAPPER_PADDING = 20

const getSpace = () => FRAME_SPACE * 2 + FRAME_WIDTH * 2 + WRAPPER_PADDING * 2

const Wrapper = styled.div`
    position: sticky;
    top: 0;

    height: 100vh;
    overflow: hidden;

    padding: 20px;
`

const Frame = styled.div`
    padding: ${FRAME_SPACE}px;

    border-width: ${FRAME_WIDTH}px;
    border-style: solid;
    border-color: #2f2d2d #434040 #4f4c4c #434040;

    background-image: linear-gradient(#e5e4df, #cdcdc6);

    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.6), 0 5px 2px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.8);

    transition: 0.1s;

    .slider {
        width: calc(100vw - ${getSpace()}px);
        height: calc(100vh - ${getSpace()}px);
    }
`

const Photo = styled.div<{ src: string }>`
    background-image: ${({ src }) => `url(${src})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    width: calc(100vw - ${getSpace()}px);
    height: calc(100vh - ${getSpace()}px);
`

type ScalablePhotoProps = {
    scale: number
    photos: string[]
    // eslint-disable-next-line no-unused-vars
    onPhotoClick?(src: string): void
}
function ScalablePhoto({ scale, photos, onPhotoClick }: ScalablePhotoProps) {
    return (
        <Wrapper>
            <Frame style={{ transform: `scale(${scale})` }}>
                <Slider {...defaultSettings} className="slider">
                    {photos.map((src, index) => (
                        <Photo
                            key={index}
                            src={src}
                            onClick={() => onPhotoClick?.(src)}
                        />
                    ))}
                </Slider>
            </Frame>
        </Wrapper>
    )
}

export default ScalablePhoto
