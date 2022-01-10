import ImageGallery from './components/ImageGallery'
import Layout from './components/Layout'
import WeddingBanner from './components/WeddingBanner'
import Greeting from './components/Welcome/Greeting'
import Welcome from './components/Welcome/Welcome'
import Map from './components/WayToCome/Map'

function App() {
    return (
        <Layout>
            <Welcome />

            <Greeting />
            <WeddingBanner />

            <ImageGallery />
            <Map />
        </Layout>
    )
}

export default App
