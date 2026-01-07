import React from 'react';

const Features = () => {
    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <div className="section-header text-center fade-in">
                    <span className="section-tag">Ưu điểm vượt trội</span>
                    <h2>Tại sao chọn Printhub?</h2>
                </div>
                <div className="feature-grid">
                    <div className="feature-card fade-in delay-1">
                        <h3>Tốc độ siêu tốc</h3>
                        <p>In nhanh lấy ngay trong ngày. Đáp ứng đơn hàng gấp cho Local Brand chạy sự kiện.</p>
                    </div>
                    <div className="feature-card fade-in delay-2">
                        <h3>Chất lượng Premium</h3>
                        <p>Mực in Nhật Bản chính hãng. Hình in sắc nét, không bong tróc, bền màu vĩnh viễn.</p>
                    </div>
                    <div className="feature-card fade-in delay-3">
                        <h3>Bảo hành 1 đổi 1</h3>
                        <p>Cam kết hoàn tiền hoặc in lại nếu sản phẩm lỗi. Uy tín đặt lên hàng đầu.</p>
                    </div>
                    <div className="feature-card fade-in delay-4">
                        <h3>Giá gốc tận xưởng</h3>
                        <p>Không qua trung gian. Chiết khấu cao cho đơn hàng số lượng lớn và đại lý.</p>
                    </div>
                    <div className="feature-card fade-in delay-5">
                        <h3>Hỗ trợ File in</h3>
                        <p>Kiểm tra và xử lý file miễn phí. Hỗ trợ tách nền, chỉnh màu chuẩn in ấn.</p>
                    </div>
                    <div className="feature-card fade-in delay-6">
                        <h3>Bảo mật mẫu in</h3>
                        <p>Cam kết tuyệt đối không bán hoặc làm lộ mẫu thiết kế độc quyền của khách hàng.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
