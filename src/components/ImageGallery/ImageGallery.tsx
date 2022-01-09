import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styled from '@emotion/styled'
import SelectedImage from './SelectedImage'

const images = [
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/15/23/people-2566244_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/26/08/00/wedding-1353829_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
]

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
}

const Wrapper = styled.div`
    padding: 20px;

    h2 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;

        margin-bottom: 12px;
    }
`

function ImageGallery() {
    const [selectedImageSrc, setSelectedImageSrc] = useState(images[0])

    return (
        <Wrapper>
            <h2>
                사진
                <br /> 갤러리.
            </h2>
            <SelectedImage src={selectedImageSrc} />
            <Slider {...settings}>
                {images.map((src) => (
                    <img
                        role="presentation"
                        src={src}
                        alt="gallery"
                        onClick={() => {
                            setSelectedImageSrc(src)
                        }}
                    />
                ))}
            </Slider>
        </Wrapper>
    )
}

export default ImageGallery
