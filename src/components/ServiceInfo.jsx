import React from 'react';

const ServiceInfo = () => {
    return (
        <section id="services" className="services">
            <h2>Giải pháp in ấn toàn diện</h2>
            <div className="service-grid">
                <div className="service-card glass-card">
                    <h3>In Gia Công PET</h3>
                    <p>Dịch vụ in gia công màng PET chuyển nhiệt theo mét. Khổ in 60cm. Giá chỉ từ 80k/m.</p>
                    <a href="tel:+84906688013" className="text-link">Nhận báo giá &rarr;</a>
                </div>
                <div className="service-card glass-card">
                    <h3>Cung Cấp Vật Tư</h3>
                    <p>Phân phối mực in, màng PET, bột chuyển nhiệt chính hãng. Giá sỉ cho xưởng in.</p>
                    <a href="#products" className="text-link">Xem sản phẩm &rarr;</a>
                </div>
                <div className="service-card glass-card">
                    <h3>Setup Xưởng In</h3>
                    <p>Tư vấn, lắp đặt và chuyển giao công nghệ in PET trọn gói cho người mới bắt đầu.</p>
                    <a href="tel:+84906688013" className="text-link">Liên hệ tư vấn &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;
