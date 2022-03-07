import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import useSlope from '../../hooks/useSlope'
import ImageGalleryModal from './ImageGalleryModal'
import ScalablePhoto from './ScalablePhoto'

const Wrapper = styled.section`
    height: 300vh;
`

const photos = [
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/15/23/people-2566244_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/26/08/00/wedding-1353829_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/08/28/bouquet-2563485_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_960_720.jpg',
]

function PhotoGallery() {
    const wrapper = useRef<HTMLDivElement>(null)
    const scale = useSlope({ wrapper, x: ['0%', '80%'], y: [2, 1] })

    const [selectedPhoto, setSelectedPhoto] = useState('')
    return (
        <Wrapper ref={wrapper}>
            <ScalablePhoto
                scale={scale}
                photos={photos}
                onPhotoClick={setSelectedPhoto}
            />

            {selectedPhoto && (
                <ImageGalleryModal
                    photos={photos}
                    initialPhoto={selectedPhoto}
                    onClose={() => setSelectedPhoto('')}
                />
            )}
        </Wrapper>
    )
}

export default PhotoGallery
