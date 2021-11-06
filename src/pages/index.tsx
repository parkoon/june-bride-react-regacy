import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import Layout from '../components/Layout'

const FakeBox = styled.div`
    height: 500px;
`
const IndexPage: FunctionComponent = () => (
    <Layout>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
        <FakeBox>Fake</FakeBox>
    </Layout>
)

export default IndexPage
