import React from 'react';
import './Row.css';
import { getProducts } from './manageBalances';

function Row() {
  let products = getProducts();

  return (
    <div className="row">
      <div className="row-title-container">
        <h2 className="row-title">~ Menu ~</h2>
      </div>
      <div className="row-products">
        {products.map((product, index) => (
          <div key={index}> 
            <img
              className={`row-poster row-poster-large`}
              src={product.img}
              alt={product.name}
            />
            <h3 style={{ marginLeft: '80px' }}>{product.name} : {product.price}$</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;