import Calendar from './components/Calendar/Calendar'
import ImageGallery from './components/ImageGallery'
import Layout from './components/Layout'
import WayToCome from './components/WayToCome/WayToCome'
import WeddingBanner from './components/WeddingBanner'
import Welcome from './components/Welcome/Welcome'
import WelcomeMessage from './components/WelcomeMessage'
import { FakeLoadingProvider } from './hooks/useFakeLoading'
import ScrollDownAnimation from './components/ScrollDownAnimation'

function App() {
    return (
        <Layout>
            <FakeLoadingProvider>
                <Welcome />
                <WelcomeMessage />
                <ScrollDownAnimation />
            </FakeLoadingProvider>
            <WeddingBanner />
            <ImageGallery />
            <Calendar />
            <WayToCome />
        </Layout>
    )
}

export default App
