import React from 'react';
import { useLocation } from 'react-router-dom';
import "./finish.css"; 

const CART_STORAGE_KEY = 'cart';

function Finish() {
  const location = useLocation();
  const cart = location.state && location.state.cart;

  const totalPrice = cart ? cart.reduce((total, item) => total + item.price, 0) : 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem(CART_STORAGE_KEY);
    alert("Not Implemented");
    console.log('Payment and shipping information submitted.');
  };

  return (
    <div className='finish-div'>
      <div className="finish-container"> 
        <h1 className="finish-header">Finish Your Purchase</h1> 
        <div className="order-summary"> 
          <h2>Order Summary</h2>
          <ul>
            {cart && cart.map((item) => (
              <li key={item.id}>{item.name}: ${item.price}</li>
            ))}
          </ul>
        </div>
        <div className="total-price">
          Total Price: ${totalPrice}
        </div>
        <form className="finish-form" onSubmit={handleSubmit}> 
          <button type="submit">Complete Purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Finish;
