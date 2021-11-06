import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Head from './Head'
import AppBar from './AppBar'

const Wrapper = styled.div`
    min-height: 100vh;

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
        <AppBar />
        {children}
    </Wrapper>
)

export default Layout
