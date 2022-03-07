import { css } from '@emotion/react'
import styled from '@emotion/styled'
import BankAccount from './components/BankAccount'
import GuestBook from './components/GuestBook'
import Landing from './components/Landing'
import Layout from './components/Layout'
// import Loading from './components/Loading'
import Map from './components/Map'
import PhotoGallery from './components/PhotoGallery'
import When from './components/When'

const EmptyBox = styled.div<{ opacity: number }>`
    height: 100vh;
    ${({ opacity }) => css`
        background: rgba(0, 0, 0, ${opacity});
    `}
`
function App() {
    const urlParams = new URLSearchParams(window.location.search)
    const env = urlParams.get('env')

    if (env === 'dev') {
        return (
            <Layout>
                <EmptyBox opacity={0.2} />
                <GuestBook />
                <EmptyBox opacity={0.3} />
            </Layout>
        )
    }
    return (
        <Layout>
            {/* <Loading /> */}
            <Landing />
            <When />
            <Map />
            <BankAccount />
            <PhotoGallery />
            <GuestBook />
        </Layout>
    )
}

export default App
