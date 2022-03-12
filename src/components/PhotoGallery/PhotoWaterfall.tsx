import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useScrollBlock } from '../../hooks/useScrollBlock'
import { useGSAnimation, useToggleInbound } from './hooks'
import ImageGalleryModal from './ImageGalleryModal'

type PhotoWaterfallProps = {
    items: string[]
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 7px;
    grid-auto-flow: row dense;
    grid-auto-rows: 10vh;
`

const Trigger = styled.div`
    position: absolute;
    width: 100%;
    height: 70vh;
`

const Image = styled.div<{ src: string }>`
    background-image: ${({ src }) => `url(${src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: brightness(0.2);
    transition: filter 0.5s;

    border-radius: 12px;

    &:nth-of-type(3n + 1) {
        grid-row: auto / span 3;
    }
    &:nth-of-type(3n + 2) {
        grid-row: auto / span 4;
    }
    &:nth-of-type(3n + 3) {
        grid-row: auto / span 5;
    }

    &.inbound {
        filter: none;
    }
`
function PhotoWaterfall({ items }: PhotoWaterfallProps) {
    const refs = useRef<HTMLElement[]>([])
    const [selectedPhoto, setSelectedPhoto] = useState('')

    const [blockScroll, allowScroll] = useScrollBlock()
    const { ref: trigger, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    })

    useToggleInbound(refs.current)
    const [gather, spread] = useGSAnimation(refs.current)

    useEffect(() => {
        gather()
    }, [])

    useEffect(() => {
        if (inView) {
            blockScroll()

            spread()
            setTimeout(() => {
                allowScroll()
            }, 2000)
        }
    }, [inView])
    return (
        <Wrapper>
            <Trigger ref={trigger} />
            {items.map((src, index) => {
                return (
                    <Image
                        key={src}
                        src={src}
                        // eslint-disable-next-line no-return-assign
                        ref={(ref) => (refs.current[index] = ref!)}
                        onClick={() => setSelectedPhoto(src)}
                    />
                )
            })}

            {selectedPhoto && (
                <ImageGalleryModal
                    item={selectedPhoto}
                    onClose={() => setSelectedPhoto('')}
                />
            )}
        </Wrapper>
    )
}

export default PhotoWaterfall
