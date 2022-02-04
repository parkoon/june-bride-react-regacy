import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Slider, { Settings } from 'react-slick'
import { useScrollBlock } from '../../hooks/useScrollBlock'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const Wrapper = styled.div`
    height: 100vh;

    background: #000;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 15;

    /* transition: transform 0.25s ease; */
    animation: ${up} 0.25s ease;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    button {
        display: flex;
    }

    p {
        color: #fff;
    }
`

const SliderWrapper = styled.div`
    transform: translateY(50%);
`

const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

type Props = {
    images: string[]
    initialImage: string
    onClose?: () => void
}
function ImageGalleryModal({ images, initialImage, onClose }: Props) {
    const [blockScroll, allowScroll] = useScrollBlock()

    const initialSlide = useMemo(
        () => images.findIndex((v) => v === initialImage),
        [images]
    )

    const [currentIndex, setCurrentIndex] = useState(initialSlide)

    useEffect(() => {
        blockScroll()
        return () => allowScroll()
    }, [allowScroll, blockScroll])

    return (
        <Wrapper>
            <Header>
                <button type="button" onClick={onClose}>
                    <MdClose size={30} color="#fff" />
                </button>
                <p>
                    {currentIndex + 1} / {images.length}
                </p>
                <div />
            </Header>

            <SliderWrapper>
                <Slider
                    {...settings}
                    afterChange={setCurrentIndex}
                    initialSlide={initialSlide}
                >
                    {images.map((src) => (
                        <img role="presentation" src={src} alt="gallery" />
                    ))}
                </Slider>
            </SliderWrapper>
        </Wrapper>
    )
}

export default ImageGalleryModal
