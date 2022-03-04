import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Landing from './components/Landing'
import Layout from './components/Layout'
import Map from './components/Map'
import MapKaKao from './components/Map/MapKaKao'
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
            <Landing />
            <When />
            {/* <EmptyBox opacity={0.1} /> */}
            {/* <When /> */}
            {/* <EmptyBox opacity={0.1} /> */}
            <Map />
            {/* <BankAccount /> */}
            <EmptyBox opacity={0.2} />

            <MapKaKao visible />

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
