import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
import "./Product.css"

export default function Product() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="main-product-div">
      <div className="product-div">
        <figure className="product-img">
          <img src={product.imgUrl} alt="product"/>
        </figure>
        <div className="product-text">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>Price: ${product.price}</p>
          <button className='btn btn-primary' type='submit'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
