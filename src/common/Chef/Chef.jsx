import React from 'react';
import './Chef.css'
import panadera from '../../img/panadera.jpg'

export const Chef = () => {
  return (
    <div className="chefHeader">
      <div
        className="background-chef"
        style={{ backgroundImage: `url(${panadera})` }}
      >
        <div className="letter-container">
          <h1>Cocas artesanas sostenibles</h1>
        </div>
      </div>
    </div>
  );
};


