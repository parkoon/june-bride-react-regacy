import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Head from './Head'

const Wrapper = styled.div``

const Layout: FunctionComponent = ({ children }) => (
    <Wrapper>
        <Head />
        <GlobalStyle />
        {children}
    </Wrapper>
)

export default Layout
