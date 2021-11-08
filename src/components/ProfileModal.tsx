import styled from '@emotion/styled'
import { FunctionComponent, useEffect, useRef } from 'react'
import { keyframes } from '@emotion/react'
import { useScrollBlock } from '../hooks/useScrollBlock'

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const Wrapper = styled.div`
    background-color: aquamarine;

    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 15;

    transition: transform 0.25s ease;
    animation: ${up} 0.25s ease;
`

type ProfileModalProps = {
    onClose?: () => void
}
const ProfileModal: FunctionComponent<ProfileModalProps> = ({ onClose }) => {
    const [blockScroll] = useScrollBlock()

    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        blockScroll()
    }, [])
    return (
        <Wrapper ref={wrapperRef} onTransitionEnd={onClose}>
            <button
                type="button"
                onClick={() => {
                    if (wrapperRef.current) {
                        wrapperRef.current.style.transform = 'translateY(100%)'
                    }
                }}
            >
                닫기
            </button>
        </Wrapper>
    )
}

export default ProfileModal
