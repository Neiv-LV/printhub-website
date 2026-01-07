import React from 'react';

const Showcase = () => {
    return (
        <section id="showcase" style={{ padding: '6rem 2rem', background: '#0a0a0a' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img src="/assets/images/tshirt_showcase.png" alt="In áo thun PET"
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Chất lượng in <span className="highlight">Tuyệt đỉnh</span></h2>
                    <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Công nghệ in PET chuyển nhiệt thế hệ mới mang lại độ chi tiết cực cao, màu sắc rực rỡ và độ bền tuyệt đối.
                        Hình in mềm mại, co giãn tốt và không bong tróc sau nhiều lần giặt.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: '#bbb' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Chi tiết sắc nét đến từng milimet</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Màu sắc tươi sáng, chuẩn file thiết kế</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Độ bền giặt tẩy vượt trội</li>
                    </ul>
                    <button className="btn-outline">Xem bảng giá</button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
