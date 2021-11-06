import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import useBoxShadow from '../hooks/useBoxShadow'

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: #fff;

    height: 64px;
    padding: 0 24px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`

const Padding = styled.div`
    height: 64px;
`

const AppBar: FunctionComponent = () => {
    const boxShadow = useBoxShadow()

    return (
        <div>
            <Wrapper style={{ ...boxShadow }}>
                <Title>청첩장</Title>

                {/* TODO. 어떤 아이콘이 필요할까? */}
            </Wrapper>
            <Padding />
        </div>
    )
}

export default AppBar
