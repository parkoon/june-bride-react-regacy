import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Slider, { Settings } from 'react-slick'
import { useScrollBlock } from '../../hooks/useScrollBlock'

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

const images = [
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/15/23/people-2566244_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/26/08/00/wedding-1353829_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
]

const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

type Props = {
    onClose?: () => void
}
function ImageGalleryModal({ onClose }: Props) {
    const [blockScroll, allowScroll] = useScrollBlock()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        blockScroll()
        return () => allowScroll()
    }, [])

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
                <Slider {...settings} afterChange={setCurrentIndex}>
                    {images.map((src) => (
                        <img role="presentation" src={src} alt="gallery" />
                    ))}
                </Slider>
            </SliderWrapper>
        </Wrapper>
    )
}

export default ImageGalleryModal
