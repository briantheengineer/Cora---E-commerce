import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';

export default function Product() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
