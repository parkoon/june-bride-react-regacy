import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div`
    height: 120px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

function WeddingBanner() {
    return (
        <Wrapper>
            <img
                src="https://i.picsum.photos/id/861/375/200.jpg?hmac=Yo9UOSF-8KBPnWEQ-bIx9aSIQoUyRTAAQVGgfEq_bVc"
                alt="banner"
            />
        </Wrapper>
    )
}

export default WeddingBanner
