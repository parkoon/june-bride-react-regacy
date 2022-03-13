import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import BankAccount from './components/BankAccount'
import GuestBook from './components/GuestBook'
import HotAccess from './components/HotAccess'
import Intro from './components/Intro'
import Landing from './components/Landing'
import Layout from './components/Layout'
import PhotoGallery from './components/PhotoGallery'

const EmptyBox = styled.div<{ opacity: number }>`
    height: 100vh;
    ${({ opacity }) => css`
        background: rgba(0, 0, 0, ${opacity});
    `}
`
function App() {
    const urlParams = new URLSearchParams(window.location.search)
    const env = urlParams.get('env')

    const [introEnd, setIntroEnd] = useState(false)

    if (env === 'dev') {
        return (
            <Layout>
                <EmptyBox opacity={0.2} />
                <HotAccess />
                <EmptyBox opacity={0.4} />
                <EmptyBox opacity={0.7} />
                {/* <Accordion /> */}
                {/* <Landing /> */}
                {/* <Intro onEnd={() => setIntroEnd(true)} />
                {introEnd && <Landing />} */}
                {/* <EmptyBox opacity={0.2} />
                <EmptyBox opacity={0.2} />
                <PhotoGallery /> */}
                {/* <EmptyBox opacity={0.2} />
                <GuestBook />
                <EmptyBox opacity={0.3} /> */}
            </Layout>
        )
    }

    return (
        <Layout>
            <Intro onEnd={() => setIntroEnd(true)} />
            {introEnd && (
                <>
                    <Landing />
                    {/* <When /> */}
                    <PhotoGallery />
                    {/* <Map /> */}
                    <BankAccount />
                    <GuestBook />
                    <HotAccess />
                </>
            )}
        </Layout>
    )
}

export default App
