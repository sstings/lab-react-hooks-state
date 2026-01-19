import React from 'react';

function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button 
        onClick={handleAddToCart}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
