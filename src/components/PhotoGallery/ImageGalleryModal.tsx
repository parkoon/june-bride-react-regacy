import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useScrollBlock } from '../../hooks/useScrollBlock'
import CloseIcon from './CloseIcon'

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

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
`

const Button = styled(motion.button)`
    position: absolute;
    top: 20px;
    right: 20px;
`

type Props = {
    item: string
    onClose?: () => void
}
function ImageGalleryModal({ item, onClose }: Props) {
    const [blockScroll, allowScroll] = useScrollBlock()
    const wrapper = useRef<HTMLDivElement>(null)

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
            <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
            >
                <CloseIcon />
            </Button>
            <Image src={item} />
        </Wrapper>
    )
}

export default ImageGalleryModal
