import React from 'react';
import './Chef.css'

export const Chef = () => {
    return (
      <div className="chefHeader">
        <div
          className="background-chef"
          style={{ backgroundImage: `url('../src/img/panadera.jpg')` }}
        >
          <div className="letter-container">
            <h1>Cocas artesanas sostenibles</h1>
          </div>
        </div>
      </div>
    );
  };


