import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
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

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    centerPadding: '60px',
}

const Wrapper = styled.div<{ fixed: boolean }>`
    background: lightblue;
`

const Image = styled.div`
    width: 300px;
    height: 420px;
    background-image: url('https://static.toss.im/career/home-intro-cover-mobile.jpg');
    background-position: 50% 50%;
    background-size: cover;
`

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

function lerp(start: number, end: number, t: number) {
    return `${start * (1 - t) + end * t}`
}

let id = 0

function ImageGallery() {
    const [selectedImageSrc, setSelectedImageSrc] = useState(images[0])

    const [openModal, setOpenModal] = useState(false)

    const currentX = useRef<number>(0)
    const scrollPos = useRef<number>(0)

    const sliderRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    const imageRefs = useRef<HTMLDivElement[]>([])

    const fakeRef = useRef<HTMLDivElement>(null)

    const [reached, setReached] = useState(false)

    const scrollHeightRef = useRef<HTMLDivElement>(null)

    const init = () => {
        const sliderSCrollWidth = sliderRef.current?.scrollWidth
        const sliderHeight = sliderRef.current?.clientHeight

        console.log('sliderSCrollWidth', sliderSCrollWidth)
        console.log('sliderHeight', sliderHeight)

        console.log('sliderSCrollWidth', sliderSCrollWidth)

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
        id = requestAnimationFrame(animate)
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
                <h2>Photos.</h2>

                <p>
                    ipsum dolorem atque aspernatur quisquam dignissimos.
                    Quibusdam, nam!
                </p>
                <Slider ref={sliderRef}>
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
                                    />
                                </SliderItem>
                            )
                        })}
                    </SliderInnder>
                </Slider>
            </StickyWrapper>

            {/* <HorizontalScroll>
                {images.map((src) => (
                    <Image />
                ))}
            </HorizontalScroll> */}
            {/* <SelectedImage
                src={selectedImageSrc}
                onClick={() => setOpenModal(true)}
            /> */}

            {/* <Slider {...settings}>
                {images.map((src) => (
                    <Image />
                    // <img
                    //     role="presentation"
                    //     src={src}
                    //     alt="gallery"
                    //     height={200}
                    //     onClick={() => {
                    //         setSelectedImageSrc(src)
                    //     }}
                    //     style={{ marginRight: 20 }}
                    // />
                ))}
            </Slider> */}

            {openModal && (
                <ImageGalleryModal onClose={() => setOpenModal(false)} />
            )}
        </div>
    )
}

export default ImageGallery

// let images = [...document.querySelectorAll('.img')];
// let slider = document0.querySelector('.slider');
// let sliderWidth;
// let imageWitdh;
// let current =0;
// let target = 0;
// let ease = .05

// window,addEventListener('resize, init');

// images.forEach((img, idx) => {
//     img.style.backgroundImage = `url(./images/${idx+1}.jpeg)`
// })

// function lerp (start, end, t){
//     return start * (1-t) + end * t;
// }

// function setTransform(el, transform){
//     el.style.transform =transform;
// }

// function init(){
//     sliderWidth = slider.getBoundingClientRect().width;
//     imagesWidth / images.length;
//     document.body.style.height = `${sliderWidth - (window,innerWidth-window.innerHeight)}px`;
// }

// function animate(){
//     current = parseFloat (lerp(current, target, ease)).toFixed(2);
//     target = window.scrollY;
//     setTransform(slider, `translateX(-${current}px)`)
//     animateImages();
//     requestAnimationFrame(animate);
// }

// function animateImages(){
//     let ratio = current / imageWitdh;
//     let intersectionRatio;

//     imageWitdh.forEach((image,idx)=> {
//         intersectionRatioValue = ratio - (idx * 0.7);
//         setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
//     })
// }

// init();
// animate();
