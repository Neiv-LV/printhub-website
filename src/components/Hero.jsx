import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Hero = () => {
    const [content, setContent] = useState({
        title_top: "In PET Chuyển Nhiệt",
        title_highlight: "Đẳng Cấp Local Brand",
        description: "Công nghệ in siêu tốc, màu sắc rực rỡ, độ bền vĩnh cửu. Đối tác tin cậy của hơn 500+ thương hiệu thời trang Việt Nam.",
        badge: "Dẫn đầu xu hướng in ấn 2026",
        cta_primary: "Gọi tư vấn ngay",
        cta_secondary: "Xem bảng giá"
    });

    useEffect(() => {
        const fetchContent = async () => {
            const { data, error } = await supabase
                .from('page_content')
                .select('content')
                .eq('page_slug', 'homepage')
                .eq('section_key', 'hero')
                .single();

            if (data && data.content) {
                // Merge with defaults to ensure missing keys don't break UI
                setContent(prev => ({ ...prev, ...data.content }));
            }
        };

        fetchContent();

        // Listen for realtime updates from the Visual Editor (postMessage)
        const handleMessage = (event) => {
            if (event.data.type === 'UPDATE_HERO') {
                setContent(prev => ({ ...prev, ...event.data.payload }));
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-content fade-in">
                <span className="hero-badge">{content.badge}</span>
                <h1>{content.title_top} <br /><span className="highlight">{content.title_highlight}</span></h1>
                <p>{content.description}</p>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={() => window.location.href = 'tel:+84906688013'}>{content.cta_primary}</button>
                    <button className="btn-secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>{content.cta_secondary}</button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-num">500+</span>
                        <span className="stat-label">Khách hàng</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">24h</span>
                        <span className="stat-label">Giao hàng</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">100%</span>
                        <span className="stat-label">Hài lòng</span>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Khám phá</span>
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
