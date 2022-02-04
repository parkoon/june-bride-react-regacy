import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionDescription from '../SectionDescription'
import SectionTitle from '../SectionTitle'
import ImageGalleryModal from './ImageGalleryModal'

const images = [
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/15/23/people-2566244_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/26/08/00/wedding-1353829_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
]

const Wrapper = styled.section`
    padding: 60px 0;
`

const Header = styled.div`
    padding: 0px 32px;
    margin-bottom: 20px;
`

const Carousel = styled(motion.div)`
    position: relative;
    margin-left: 32px;
`

const CarouselInner = styled(motion.div)`
    display: flex;
`

const CarouselItem = styled(motion.div)<{ url: string }>`
    height: 420px;
    min-width: 70%;

    &:not(:last-child) {
        margin-right: 18px;
    }

    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-size: cover;
    border-radius: 7px;
`

function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState('')

    const [carouselWidth, setCarouselWidth] = useState(0)

    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (carouselRef.current) {
            setCarouselWidth(
                carouselRef.current.scrollWidth -
                    carouselRef.current.offsetWidth
            )
        }
    }, [])

    return (
        <Wrapper>
            <Header>
                <SectionTitle />
                <SectionDescription />
            </Header>

            <Carousel ref={carouselRef}>
                <CarouselInner
                    drag="x"
                    dragConstraints={{ right: 0, left: -carouselWidth }}
                >
                    {images.map((image) => {
                        return (
                            <CarouselItem
                                url={image}
                                onClick={() => setSelectedImage(image)}
                            />
                        )
                    })}
                </CarouselInner>
            </Carousel>

            {selectedImage && (
                <ImageGalleryModal
                    images={images}
                    initialImage={selectedImage}
                    onClose={() => setSelectedImage('')}
                />
            )}
        </Wrapper>
    )
}

export default ImageGallery
