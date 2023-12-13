import React from 'react';
import '../estilos/ProductCard.css';

const ProductCard = ({ photo, name, price, onBuyClick }) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} className="imagen"/>
      <h3>{name}</h3>
      <p>${price}</p>
      <button><a href="./FormularioCompra.html">Comprar</a></button>
    </div>
  );
};

export default ProductCard;