import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useMemo, useRef, useState } from 'react'
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
    photos: string[]
    initialPhoto: string
    onClose?: () => void
}
function ImageGalleryModal({ photos, initialPhoto, onClose }: Props) {
    const [blockScroll, allowScroll] = useScrollBlock()
    const wrapper = useRef<HTMLDivElement>(null)

    const initialSlide = useMemo(
        () => photos.findIndex((v) => v === initialPhoto),
        [photos]
    )

    const [currentIndex, setCurrentIndex] = useState(initialSlide)

    const handleClose = () => {
        if (!wrapper.current) return

        const animation = wrapper.current.animate(
            [
                {
                    transform: 'translateY(0)',
                },
                {
                    transform: 'translateY(100%)',
                },
            ],
            { duration: 0.1 * 1000 }
        )

        animation.addEventListener('finish', () => onClose?.())
    }

    useEffect(() => {
        blockScroll()
        return () => allowScroll()
    }, [allowScroll, blockScroll])

    return (
        <Wrapper ref={wrapper}>
            <Header>
                <button type="button" onClick={handleClose}>
                    <MdClose size={30} color="#fff" />
                </button>
                <p>
                    {currentIndex + 1} / {photos.length}
                </p>
                <div />
            </Header>

            <SliderWrapper>
                <Slider
                    {...settings}
                    afterChange={setCurrentIndex}
                    initialSlide={initialSlide}
                >
                    {photos.map((src, index) => (
                        <img
                            role="presentation"
                            key={index}
                            src={src}
                            alt="gallery"
                        />
                    ))}
                </Slider>
            </SliderWrapper>
        </Wrapper>
    )
}

export default ImageGalleryModal
