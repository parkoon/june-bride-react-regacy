import Landing from './components/Landing'
import Layout from './components/Layout'

function App() {
    return (
        <Layout>
            <div>
                <Landing />
            </div>

            <section style={{ textAlign: 'center', padding: '0 20px' }}>
                <h1>Lorem ipsum </h1>
                <p>
                    dolor sit amet consectetur adipisicing elit. Rerum dolores
                    debitis numquam neque consequuntur sed saepe at minus quod
                    dolore aut in, eum ex! Repellendus quas assumenda sed quasi
                    consequuntur?
                </p>
                <br />
                <p>
                    dolor sit amet consectetur adipisicing elit. Rerum dolores
                    debitis numquam neque consequuntur sed saepe at minus quod
                    dolore aut in, eum ex! Repellendus quas assumenda sed quasi
                    consequuntur?
                </p>
                <br />
                <p>
                    dolor sit amet consectetur adipisicing elit. Rerum dolores
                    debitis numquam neque consequuntur sed saepe at minus quod
                    dolore aut in, eum ex! Repellendus quas assumenda sed quasi
                    consequuntur?
                </p>
                <br />
                <p>
                    dolor sit amet consectetur adipisicing elit. Rerum dolores
                    debitis numquam neque consequuntur sed saepe at minus quod
                    dolore aut in, eum ex! Repellendus quas assumenda sed quasi
                    consequuntur?
                </p>
            </section>

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
