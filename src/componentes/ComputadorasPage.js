import React from 'react'
import ProductCard from './ProductCard';
import '../estilos/ElectronicsPage.css';

export const ComputadorasPage = () => {
    const handleBuyClick = () => {
        
        console.log('Compra realizada');
      };
    
      return (
        <div className="electronics-page">
          <h1>Computadoras</h1>
          <div className="product-grid">
            <ProductCard
              photo="/imagenes/comp acer.jfif"
              name="Acer"
              price={1499.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/comp apple.jfif"
              name="Apple"
              price={2299.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/comp asus.jpg"
              name="Asus"
              price={1299.99}
              onBuyClick={handleBuyClick}
            />
              <ProductCard
                  photo="/imagenes/comp dell.jfif"
                  name="Dell"
                  price={1699.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/comp hp.jfif"
                  name="HP"
                  price={1799.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/comp intel.jpg"
                  name="Intel"
                  price={1899.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/comp lenovo.jfif"
                  name="Lenovo"
                  price={1599.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/comp microsoft.jfif"
                  name="Microsoft"
                  price={1799.99}
                  onBuyClick={handleBuyClick}
              />
          </div>
        </div>
      );
}
export default ComputadorasPage;