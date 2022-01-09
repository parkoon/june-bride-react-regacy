import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import Like, { LottieLike } from '../Lottie/Like'

const ImageWrapper = styled.div`
    position: relative;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    > svg {
        color: #d63031;

        position: absolute;

        right: 12px;
        bottom: 12px;
    }
`

type Props = {
    src: string
}
function SelectedImage({ src }: Props) {
    const animationRef = useRef<LottieLike>(null)

    const [liked, setLiked] = useState(false)

    const LikeIcon = liked ? MdFavorite : MdFavoriteBorder

    return (
        <ImageWrapper>
            <img src={src} alt="selected" />
            <LikeIcon
                size={25}
                onClick={() => {
                    if (animationRef.current && !liked) {
                        animationRef.current?.play()
                    }

                    setLiked((prev) => !prev)
                }}
            />
            <Like ref={animationRef} />
        </ImageWrapper>
    )
}

export default SelectedImage
