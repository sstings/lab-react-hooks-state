import React from 'react';

function Cart({ cart }) {
  return (
    <div className="cart" data-testid="shopping-cart">
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} is in your cart.
              </li>
            ))}
          </ul>
          <p className="cart-total">
            Total Items: {cart.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
