import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { MdArrowBack } from 'react-icons/md'
import useFakeLoading from '../hooks/useFakeLoading'
import useIsScrollTop from '../hooks/useIsScrollTop'

const bounce = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-10px);
    }
`

const Wrapper = styled.div<{ show: boolean }>`
    display: flex;
    align-items: center;

    color: #636e72;

    position: fixed;
    bottom: 12%;
    left: 50%;

    opacity: 0;
    transform: rotate(-90deg) translate(-100%, -60px);

    ${({ show }) =>
        show &&
        css`
            opacity: 1;
            transition: all 0.7s ease 0.7s;
            transform: rotate(-90deg) translate(10px, -60px);
        `}
`

const Arrow = styled(MdArrowBack)`
    animation: ${bounce} 0.8s cubic-bezier(0.7, 0, 0.3, 1) infinite alternate;
`

const Text = styled.span`
    display: inline-block;
    font-size: 12px;
    margin-left: 7px;
`

function ScrollDownAnimation() {
    const loaded = useFakeLoading()
    const isScrollTop = useIsScrollTop()

    const show = loaded && isScrollTop
    return (
        <Wrapper show={show}>
            <Arrow />
            <Text>내려주세요</Text>
        </Wrapper>
    )
}

export default ScrollDownAnimation
