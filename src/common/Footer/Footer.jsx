import React from 'react';
import './Footer.css';
import ig from '../../img/logo-ig.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        {/* Imagen de fondo */}
      </div>
      <div className="footer-content">
        <a href="https://www.instagram.com/mardecoques" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram del restaurante" />
        </a>
      </div>
    </footer>
  );
};

