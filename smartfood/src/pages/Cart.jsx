import React, { useContext } from 'react';
import { CartContext } from '../contexts/CardContext'; // Correct path to CartContext
import './Cart.css'; // Correct path to Cart.css

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <p>{item.itemNamelog}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: £{item.price * item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;