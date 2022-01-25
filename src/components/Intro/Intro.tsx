import styled from '@emotion/styled'
import IntroImage from './IntroImage'

const Wrapper = styled.div`
    width: 100%;
    height: 2001px;
    pointer-events: none;
`

function Intro() {
    return (
        <Wrapper>
            <IntroImage />
        </Wrapper>
    )
}

export default Intro
