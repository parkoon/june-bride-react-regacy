import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.div<{ visible: boolean }>`
    height: 240px;
    padding: 0 24px;
    padding-top: 150px;
    h3 {
        color: rgb(29, 29, 31);
        font-size: 40px;
        font-weight: 700;
        height: 48px;
        line-height: 48px;

        transition: 0.35s ease;
        opacity: 0;
        transform: translateY(50px);

        ${({ visible }) =>
            visible &&
            css`
                opacity: 1;
                transform: translateY(0px);
            `}
    }
`

function WhenMessage() {
    const [textRef, inView] = useInView({
        threshold: 1,
    })
    return (
        <Wrapper ref={textRef} visible={inView}>
            <h3>
                인간에게 해를 끼치지 않는 <br />
                길한 날.
            </h3>
        </Wrapper>
    )
}

export default WhenMessage
