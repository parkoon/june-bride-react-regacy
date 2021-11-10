import styled from '@emotion/styled'
import React, { FunctionComponent, useState } from 'react'
import Banner from '../components/Banner'
import BottomSheet from '../components/BottomSheet'
import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard'
import ProfileModal from '../components/ProfileModal'
import RippleWrapper from '../components/RippleWrapper'
import Section from '../components/Section'

const FakeBox = styled.div`
    height: 500px;
`
const IndexPage: FunctionComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <Layout>
            <Banner />
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

            {open && (
                <ProfileModal
                    onClose={() => {
                        setOpen(false)
                    }}
                />
            )}
            <BottomSheet />

            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
            <FakeBox />
        </Layout>
    )
}

export default IndexPage
