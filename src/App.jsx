import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceInfo from './components/ServiceInfo'
import ProductCatalog from './components/ProductCatalog'
import './index.css'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <ServiceInfo />
                <ProductCatalog />
            </main>
            <footer className="footer">
                <p>&copy; 2026 PET Printing Service. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
