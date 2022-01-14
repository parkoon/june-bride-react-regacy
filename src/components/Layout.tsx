import React from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Head from './Head'

const Wrapper = styled.div`
    min-height: 100vh;

    /* 초대합니다 애니메이션으로 발생하는 overflow */
    overflow-x: hidden;

    /* @media (min-width: 1024px) {
        width: 375px;
        margin: 0 auto;
        border: 1px solid gray;
        border-top: none;
        border-bottom: none;
    } */
`

const Content = styled.main`
    /* padding: 0 24px; */
    /* padding-top: 8px; */
`

type Props = {
    children: React.ReactNode
}
function Layout({ children }: Props) {
    return (
        <Wrapper>
            <Head />
            <GlobalStyle />
            <Content>{children}</Content>
        </Wrapper>
    )
}

export default Layout
