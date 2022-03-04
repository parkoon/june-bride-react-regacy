import styled from '@emotion/styled'
import WhenInfo from './WhenInfo'
import WhenMessage from './WhenMessage'

const Wrapper = styled.div``

function When() {
    return (
        <Wrapper>
            <WhenMessage />
            <WhenInfo />
        </Wrapper>
    )
}

export default When
