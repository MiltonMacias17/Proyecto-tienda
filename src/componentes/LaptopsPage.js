import React from 'react';
import ProductCard from './ProductCard';
import '../estilos/ElectronicsPage.css';

const LaptopsPage = () => {
    const handleBuyClick = () => {
      // Lógica para realizar la compra
      console.log('Compra realizada');
    };
  
    return (
      <div className="electronics-page">
        <h1>Laptops</h1>
        <div className="product-grid">
          <ProductCard
            photo="/imagenes/acer.jfif"
            name="Acer"
            price={1499.99}
            onBuyClick={handleBuyClick}
          />
          <ProductCard
            photo="/imagenes/asus.jfif"
            name="Asus"
            price={1299.99}
            onBuyClick={handleBuyClick}
          />
          <ProductCard
            photo="/imagenes/apple.jpg"
            name="Apple"
            price={1999.99}
            onBuyClick={handleBuyClick}
          />
            <ProductCard
                photo="/imagenes/dell.jfif"
                name="Dell"
                price={1599.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/hp.jfif"
                name="HP"
                price={1499.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/lenovo.jfif"
                name="Lenovo"
                price={1299.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/microsoft.jfif"
                name="Microsoft"
                price={1899.99}
                onBuyClick={handleBuyClick}
            />
            <ProductCard
                photo="/imagenes/samsung.jfif"
                name="Samsung"
                price={1899.99}
                onBuyClick={handleBuyClick}
            />
        </div>
      </div>
    );
  };
  
  export default LaptopsPage;