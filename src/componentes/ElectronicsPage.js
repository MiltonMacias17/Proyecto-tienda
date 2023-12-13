import React from 'react';
import ProductCard from './ProductCard';
import '../estilos/ElectronicsPage.css';

const ElectronicsPage = () => {
    const handleBuyClick = () => {
      
      console.log('Compra realizada');
    };
  
    return (
      <div className="electronics-page">
        <h1>Electrónicos</h1>
        <div className="product-grid">
          <ProductCard
            photo="/imagenes/aspiradora.jfif"
            name="Aspiradora"
            price={499.99}
            onBuyClick={handleBuyClick}
          />
          <ProductCard
            photo="/imagenes/cafetera.jfif"
            name="Cafetera"
            price={299.99}
            onBuyClick={handleBuyClick}
          />
          <ProductCard
            photo="/imagenes/frezer.jfif"
            name="Frezer"
            price={1299.99}
            onBuyClick={handleBuyClick}
          />
            <ProductCard
                photo="/imagenes/horno.jfif"
                name="Horno Electrico"
                price={999.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/lavadora.jfif"
                name="Lavadora"
                price={1099.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/licuadora.jfif"
                name="Licuadora"
                price={199.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/microondas.jfif"
                name="Microondas"
                price={699.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/plancha.jfif"
                name="Plancha"
                price={99.99}
                onBuyClick={handleBuyClick}
            />
        </div>
      </div>
    );
  };
  
  export default ElectronicsPage;