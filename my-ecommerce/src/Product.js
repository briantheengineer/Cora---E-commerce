import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './data.json';
import "./Product.css";

const CART_STORAGE_KEY = 'cart';

export default function Product() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleFinish = () => {
    navigate('/finish', { state: { cart } });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {cart.length > 0 && ( 
        <div className={`shopping-cart-list ${showCart ? 'active' : ''}`}>
          <ul>
            {cart.map((item) => (
              <div className='product-list' key={item.id}>
                <p>{item.name}</p> <br/>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </ul>
          <p className='cart-price'>Total Price: ${totalPrice}</p>
          <button className='finish-button' onClick={handleFinish}>Finish</button>
        </div>
      )}

      <div className="main-product-div">
        <div className="product-div">
          <figure className="product-img">
            <img src={product.imgUrl} alt="product"/>
          </figure>
          <div className="product-text">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p className='product-description'>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className='btn btn-primary' type='submit' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
