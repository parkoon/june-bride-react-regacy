import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import GhostIcon from './GhostIcon'

const Wrapper = styled.div<{ visible: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgba(0, 0, 0, 0.2vvv);

    height: 100vh;
    padding: 0 24px;

    h3 {
        display: flex;
        align-items: center;

        font-size: 42px;
        font-weight: 700;

        transition: 0.7s ease;
        opacity: 0;
        transform: translateY(50px);

        ${({ visible }) =>
            visible &&
            css`
                opacity: 1;
                transform: translateY(0px);
            `}
    }

    h3:not(:last-child) {
        margin-bottom: 18px;
    }

    h3:nth-of-type(2) {
        ${({ visible }) =>
            visible
                ? css`
                      transition-delay: 0.25s;
                  `
                : css`
                      transition-delay: 0;
                  `}
    }
    h3:nth-of-type(3) {
        ${({ visible }) =>
            visible
                ? css`
                      transition-delay: 0.5s;
                  `
                : css`
                      transition-delay: 0;
                  `}
    }
`

const Icon = styled(GhostIcon)`
    margin-right: 12px;
`

function WhenMessage() {
    const [textRef, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <Wrapper ref={textRef} visible={inView}>
            <h3>인간에게</h3>
            <h3>해를 끼치지 않는</h3>
            <h3>
                <Icon /> 길한 날.
            </h3>
        </Wrapper>
    )
}

export default WhenMessage
