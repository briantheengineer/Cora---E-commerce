import React from 'react';
import Card from './Card';
import data from './data.json'; 

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <div className="products-container">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
