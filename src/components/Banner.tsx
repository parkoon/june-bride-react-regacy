import * as React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'

/**
 * @see https://react-slick.neostack.com/docs/api/
 */
const defaultSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
}

const Box = styled.div<{ bg: string }>`
    width: 100%;
    height: 82px;

    border-radius: 4px;

    background: ${(props) => props.bg};
`
const background = ['#00b894', '#0984e3', '#d63031', '#2d3436']
const Banner = () => {
    return (
        <div>
            <Slider {...defaultSettings}>
                {background.map((bg) => (
                    <Box bg={bg} />
                ))}
            </Slider>
        </div>
    )
}

export default Banner
