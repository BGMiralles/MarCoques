import React from 'react';
import './Products.css';
import coca_anchoa from '../../img/coca_anchoa.jpg';
import coca_pi from '../../img/coca_pi.jpg'
import choco from '../../img/choco.jpg';
import frutos from '../../img/frutos.jpg';

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
        <img src={choco} alt="Imagen 3" />
        <div className="product-text">
          <h2>Coca chocolate</h2>
        </div>
      </div>
      <div className="product">
        <img src={frutos} alt="Imagen 4" />
        <div className="product-text">
          <h2>Coca frutos secos</h2>
        </div>
      </div>
    </div>
  );
};

