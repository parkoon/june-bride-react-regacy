import styled from '@emotion/styled'
import { useFadeInOut } from './hooks'

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgb(0, 0, 0);
`

function LandingFadeInOut() {
    const opacity = useFadeInOut({
        opacity: [
            { trigger: '10%', value: 0.3 },
            { trigger: '40%', value: 0.8 },
            { trigger: '70%', value: 0 },
        ],
    })

    return <Wrapper style={{ opacity }} />
}

export default LandingFadeInOut
