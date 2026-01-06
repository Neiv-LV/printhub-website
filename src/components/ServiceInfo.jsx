import React from 'react';

const ServiceInfo = () => {
    return (
        <section id="services" className="services">
            <h2>Why Choose PET Printing?</h2>
            <div className="service-grid">
                <div className="service-card">
                    <h3>Vibrant Colors</h3>
                    <p>Our premium ink ensures your designs pop with color accuracy and brightness.</p>
                </div>
                <div className="service-card">
                    <h3>High Durability</h3>
                    <p>Withstands multiple washes without cracking or fading. Quality that lasts.</p>
                </div>
                <div className="service-card">
                    <h3>Any Fabric</h3>
                    <p>Suitable for cotton, polyester, blends, and more. Versatility for your brand.</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;
