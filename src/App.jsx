import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>Grocery Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      
      <main>
        <div className="content-container">
          <div className="products-section">
            <ProductList 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory} // Simplified
              addToCart={addToCart}
            />
          </div>
          
          <div className="cart-section">
            <Cart cart={cart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;