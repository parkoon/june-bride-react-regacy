import Calendar from './components/Calendar/Calendar'
import ImageGallery from './components/ImageGallery'
import Layout from './components/Layout'
import WayToCome from './components/WayToCome/WayToCome'
import WeddingBanner from './components/WeddingBanner'
import Greeting from './components/Greeting'
import Welcome from './components/Welcome/Welcome'

function App() {
    return (
        <Layout>
            <Welcome />
            <Greeting />
            <WeddingBanner />
            <ImageGallery />
            <Calendar />
            <WayToCome />
        </Layout>
    )
}

export default App
