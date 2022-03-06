import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Landing from './components/Landing'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Map from './components/Map'
import When from './components/When'

const EmptyBox = styled.div<{ opacity: number }>`
    height: 100vh;
    ${({ opacity }) => css`
        background: rgba(0, 0, 0, ${opacity});
    `}
`
function App() {
    return (
        <Layout>
            <Loading />
            <Landing />
            <When />
            {/* <EmptyBox opacity={0.1} /> */}
            {/* <When /> */}
            {/* <EmptyBox opacity={0.1} /> */}
            <Map />
            {/* <BankAccount /> */}
            <EmptyBox opacity={0.2} />

            <EmptyBox opacity={0.3} />
            {/* <Landing />

            <Date /> */}
            {/* <FakeLoadingProvider>
                <Welcome />
                <WelcomeMessage />
                <ScrollDownAnimation />
            </FakeLoadingProvider> */}
            {/* <WeddingBanner />
            <ImageGallery />
            <Calendar />
            <WayToCome /> */}
        </Layout>
    )
}

export default App
