import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
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

/**
 * @see https://codepen.io/christoffer-traynor-s-rensen/pen/WNpoRWg
 * @see https://www.youtube.com/watch?v=z-oexYPY9GY
 */

const Slider = styled.div`
    height: 500px;

    position: absolute;
    top: 50%;

    transform: translateY(-50%);
`
const SliderInnder = styled.div`
    height: 100%;
    display: flex;
`
const SliderItem = styled.div`
    position: relative;

    width: 300px;
    height: 100%;
    overflow: hidden;

    flex-shrink: 0;

    margin-right: 12px;
    background-color: red;
`
const SliderImage = styled.div<{ url: string }>`
    position: absolute;
    left: -100px;
    width: 400px;
    height: 100%;

    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-size: cover;
`

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
`

const Header = styled.div`
    padding: 40px 32px;
`

function lerp(start: number, end: number, t: number) {
    return `${start * (1 - t) + end * t}`
}

function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState('')

    const currentX = useRef<number>(0)
    const scrollPos = useRef<number>(0)

    const sliderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const imageRefs = useRef<HTMLDivElement[]>([])

    const [reached, setReached] = useState(false)

    const init = () => {
        const sliderSCrollWidth = sliderRef.current?.scrollWidth

        if (wrapperRef.current && sliderSCrollWidth) {
            wrapperRef.current.style.height = `calc(${sliderSCrollWidth}px + 100vh)`
            // scrollHeightRef.current!.style.height = `${sliderSCrollWidth}px`
        }
    }

    function animateImage() {
        const ratio = currentX.current / 400

        if (ratio < 0) return

        if (imageRefs.current) {
            imageRefs.current.forEach((image, idx) => {
                const intersectionRatio = ratio - idx * 0.7

                // eslint-disable-next-line no-param-reassign
                image.style.transform = `translateX(${
                    intersectionRatio! * 70
                }px)`
            })
        }
    }

    function animate() {
        // console.log('currentX.current', currentX.current)
        currentX.current = Number(
            parseFloat(
                lerp(
                    currentX.current,
                    scrollPos.current - wrapperRef.current!.offsetTop,
                    0.05
                )
            ).toFixed(2)
        )

        scrollPos.current = window.scrollY

        if (sliderRef.current) {
            sliderRef.current.style.transform = `translate(-${currentX.current}px, -50%)`
        }
        animateImage()
        requestAnimationFrame(animate)
    }

    useEffect(() => {
        init()
        // animate()

        window.addEventListener('scroll', () => {
            if (wrapperRef.current!.offsetTop <= window.scrollY) {
                setReached(true)
            } else {
                setReached(false)
            }
        })
    }, [])

    useEffect(() => {
        if (reached) {
            animate()
        }
    }, [reached])
    return (
        <div ref={wrapperRef}>
            <StickyWrapper>
                <Header>
                    <SectionTitle />

                    <SectionDescription />
                </Header>
                {/* <Slider ref={sliderRef}>
                    <SliderInnder>
                        {images.map((url, index) => {
                            return (
                                <SliderItem>
                                    <SliderImage
                                        url={url}
                                        // eslint-disable-next-line no-return-assign
                                        ref={(el) =>
                                            (imageRefs.current[index] = el!)
                                        }
                                        onClick={() => setSelectedImage(url)}
                                    />
                                </SliderItem>
                            )
                        })}
                    </SliderInnder>
                </Slider> */}
            </StickyWrapper>

            {selectedImage && (
                <ImageGalleryModal
                    images={images}
                    initialImage={selectedImage}
                    onClose={() => setSelectedImage('')}
                />
            )}
        </div>
    )
}

export default ImageGallery
