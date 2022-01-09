import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div`
    background-color: #000;
    color: #fff;

    padding: 20px 32px 72px 32px;

    span {
        display: inline-block;
        font-size: 12px;
        font-style: italic;

        margin-bottom: 24px;
    }
    h2 {
        font-weight: bold;

        margin-bottom: 12px;
    }
    p {
        font-weight: bold;
        color: #b2bec3;
    }
`

function Greeting() {
    return (
        <Wrapper>
            <span>since 2017.</span>
            <h2>Lorem ipsum dolor sit</h2>
            <p>
                amet consectetur adipisicing elit. Alias ullam praesentium
                veritatis. Quis nesciunt, similique totam officia vel suscipit,
                dolores quam soluta quidem laboriosam sapiente amet officiis,
                inventore saepe at!
            </p>
        </Wrapper>
    )
}

export default Greeting
