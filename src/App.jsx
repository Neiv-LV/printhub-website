import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Process from './components/Process'
import ServiceInfo from './components/ServiceInfo'
import ProductCatalog from './components/ProductCatalog'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import './index.css'

function App() {
    useIntersectionObserver();

    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Showcase />
                <Features />
                <Process />
                <ServiceInfo />
                <ProductCatalog />
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="navbar-brand" style={{ marginBottom: '1rem' }}>
                            <span className="logo-print">Print</span><span className="logo-hub">hub</span>
                        </div>
                        <p>Đối tác in ấn tin cậy của hơn 500+ Local Brand tại Việt Nam. Cam kết chất lượng và tiến độ hàng đầu.</p>
                        <p>
                            <strong style={{ color: 'white' }}>Hotline:</strong> 0906.688.013<br />
                            <strong style={{ color: 'white' }}>Website:</strong> Printhub.com.vn<br />
                            <strong style={{ color: 'white' }}>Địa chỉ:</strong> 123 Nguyễn Văn Cừ, Q.5, TP.HCM
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Printhub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App
