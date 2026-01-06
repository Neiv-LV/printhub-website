import React from 'react';

const products = [
    { id: 1, name: 'Premium PET Ink', category: 'Ink', price: 'Contact for Price', image: 'https://via.placeholder.com/300/ff3e00/ffffff?text=PET+Ink' },
    { id: 2, name: 'Hot Peel Film', category: 'Film', price: 'Contact for Price', image: 'https://via.placeholder.com/300/242424/ffffff?text=PET+Film' },
    { id: 3, name: 'Adhesive Powder', category: 'Powder', price: 'Contact for Price', image: 'https://via.placeholder.com/300/ffffff/000000?text=PET+Powder' },
];

const ProductCatalog = () => {
    return (
        <section id="products" className="products">
            <h2>Printing Supplies</h2>
            <p className="subtitle">Top-grade materials for professional results</p>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="product-info">
                            <span className="category">{product.category}</span>
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                            <button className="btn-outline">Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCatalog;
