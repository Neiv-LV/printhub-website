import React from 'react';

const Process = () => {
    return (
        <section id="process" className="process section-padding bg-darker">
            <div className="container">
                <div className="section-header text-center fade-in">
                    <span className="section-tag">Quy trình làm việc</span>
                    <h2>3 Bước đơn giản</h2>
                </div>
                <div className="process-steps">
                    <div className="step-item fade-in">
                        <div className="step-number">01</div>
                        <h3>Gửi File</h3>
                        <p>Gửi file thiết kế qua Zalo/Email. Kỹ thuật viên sẽ kiểm tra và tối ưu file in.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-item fade-in delay-2">
                        <div className="step-number">02</div>
                        <h3>In Ấn</h3>
                        <p>Tiến hành in PET trên máy công nghiệp khổ lớn với tốc độ cao.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-item fade-in delay-4">
                        <div className="step-number">03</div>
                        <h3>Giao Hàng</h3>
                        <p>Kiểm tra chất lượng (QC), đóng gói và giao hàng hỏa tốc toàn quốc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
