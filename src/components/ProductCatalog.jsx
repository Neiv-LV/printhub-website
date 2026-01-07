import React from 'react';

const products = [
    { id: 1, name: 'Mực in PET UMO', category: 'Mực in', price: 'Liên hệ báo giá', image: '/assets/images/ink_clean.jpg' },
    { id: 2, name: 'Màng PET 60cm', category: 'Màng in', price: 'Liên hệ báo giá', image: '/assets/images/film_clean.jpg' },
    { id: 3, name: 'Bột PET chống nhiễm', category: 'Bột chuyển nhiệt', price: 'Liên hệ báo giá', image: '/assets/images/powder_clean.jpg' },
];

const ProductCatalog = () => {
    return (
        <section id="products" className="products">
            <h2>Nguyên liệu in ấn</h2>
            <p className="subtitle">Cung cấp vật tư chính hãng cho xưởng in chuyên nghiệp</p>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="product-info">
                            <span className="category">{product.category}</span>
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                            <button className="btn-outline">Chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCatalog;
