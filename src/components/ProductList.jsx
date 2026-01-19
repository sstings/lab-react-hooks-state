import React from 'react';
import ProductCard from './ProductCard';

// Export this array so tests can use it
export const sampleProducts = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 3.99 },
  { id: 2, name: 'Apple', category: 'Fruits', price: 1.99 },
  { id: 3, name: 'Eggs', category: 'Dairy', price: 4.99 },
  { id: 4, name: 'Bread', category: 'Bakery', price: 2.50 },
  { id: 5, name: 'Chicken', category: 'Meat', price: 8.99 },
  { id: 6, name: 'Rice', category: 'Grains', price: 5.99 },
];

// Also export the products as default for the component to use
const products = sampleProducts;

function ProductList({ selectedCategory, onCategoryChange, addToCart }) {
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      
      {/* Category Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select 
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-filter"
          role="combobox"
          data-testid="category-filter"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>no products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
