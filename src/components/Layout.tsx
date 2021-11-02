import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'

const Wrapper = styled.div``

const Layout: FunctionComponent = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
)

export default Layout
