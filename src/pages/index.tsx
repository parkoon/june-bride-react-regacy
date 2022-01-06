import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import Layout from '../components/Layout'
import Welcome from '../components/Welcome/Welcome'

const FakeBox = styled.div`
    height: 500px;
`
const IndexPage: FunctionComponent = () => {
    return (
        <Layout>
            <Welcome />

            <FakeBox />
            <FakeBox />
            <FakeBox />
            {/* <Banner />
            <Section title="신랑 프로필">
                <RippleWrapper afterEffect={() => setOpen(true)}>
                    <ProfileCard
                        title="Lorem"
                        caption="Lorem ipsum dolor"
                        imageSrc="https://i.picsum.photos/id/767/100/100.jpg?hmac=4fhmby7FsMVLDWjUAkoUaA1I3kekt8kTa-ZUmNIU91M"
                    />
                </RippleWrapper>
            </Section>
            <Section title="신부 프로필">
                <RippleWrapper afterEffect={() => setOpen(true)}>
                    <ProfileCard
                        title="Lorem"
                        caption="Lorem ipsum dolor"
                        imageSrc="https://i.picsum.photos/id/767/100/100.jpg?hmac=4fhmby7FsMVLDWjUAkoUaA1I3kekt8kTa-ZUmNIU91M"
                    />
                </RippleWrapper>
            </Section>

            <Section title="채팅" />


            {open && (
                <ProfileModal
                    onClose={() => {
                        setOpen(false)
                    }}
                />
            )}

            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox /> */}
        </Layout>
    )
}

export default IndexPage
