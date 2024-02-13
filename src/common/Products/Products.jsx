import React from 'react';
import './Products.css';
import coca_anchoa from '../../img/coca_anchoa.jpg';
import coca_pi from '../../img/coca_pi.jpg'

export const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img src={coca_anchoa} alt="Imagen 1" />
        <div className="product-text">
          <h2>Coca anchoas</h2>
        </div>
      </div>
      <div className="product">
        <img src={coca_pi} alt="Imagen 2" />
        <div className="product-text">
          <h2>Coca</h2>
        </div>
      </div>
      <div className="product">
        <img src="imagen3.jpg" alt="Imagen 3" />
        <div className="product-text">
          <h2>Producto 3</h2>
        </div>
      </div>
      <div className="product">
        <img src="imagen4.jpg" alt="Imagen 4" />
        <div className="product-text">
          <h2>Producto 4</h2>
        </div>
      </div>
    </div>
  );
};

