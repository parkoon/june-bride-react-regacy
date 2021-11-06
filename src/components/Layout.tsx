import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Head from './Head'

const Wrapper = styled.div`
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.05);

    @media (min-width: 1024px) {
        width: 375px;
        margin: 0 auto;
        border: 1px solid gray;
        border-top: none;
        border-bottom: none;
    }
`

const Layout: FunctionComponent = ({ children }) => (
    <Wrapper>
        <Head />
        <GlobalStyle />
        {children}
    </Wrapper>
)

export default Layout
