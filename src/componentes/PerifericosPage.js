import React from 'react'
import ProductCard from './ProductCard';
import '../estilos/ElectronicsPage.css';

export const PerifericosPage = () => {
    const handleBuyClick = () => {
        console.log('Compra realizada');
      };
      return (
        <div className="electronics-page">
          <h1>Perifericos</h1>
          <div className="product-grid">
            <ProductCard
              photo="/imagenes/per alt.jfif"
              name="Altavoz"
              price={499.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/per aud.jfif"
              name="Audiculares"
              price={299.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/per cam.jfif"
              name="Camara"
              price={1299.99}
              onBuyClick={handleBuyClick}
            />
              <ProductCard
                  photo="/imagenes/per mic.jfif"
                  name="Microfono"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/per mouse.jfif"
                  name="Mouse"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/per scan.jfif"
                  name="Scanner"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/per tabl.jfif"
                  name="Tableta Grafica"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/per teclado.jfif"
                  name="Teclado"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
          </div>
        </div>
      );
}
export default PerifericosPage;