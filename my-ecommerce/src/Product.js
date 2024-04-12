import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
import "./Product.css"

export default function Product() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className='shopping-cart-list'>
      <ul>
          {cart.map((item, index) => (
            <div className='product-list'>
              <p key={index}>{item.name}</p>
              <p key={index}>{item.price}</p>
              <button onClick={() => removeFromCart(index)}>X</button>
            </div>
            
          ))}
        </ul>
        <p className='cart-price'>Total Price: ${totalPrice}</p>
      </div>
    <div className="main-product-div">
      <div className="product-div">
        <figure className="product-img">
          <img src={product.imgUrl} alt="product"/>
        </figure>
        <div className="product-text">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>Price: ${product.price}</p>
          <button className='btn btn-primary' type='submit' onClick= {addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
}
