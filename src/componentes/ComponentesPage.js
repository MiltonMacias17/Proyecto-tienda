import React from 'react'
import ProductCard from './ProductCard';
import '../estilos/ElectronicsPage.css';

export const ComponentesPage = () => {
    const handleBuyClick = () => {
        
        console.log('Compra realizada');
      };
    
      return (
        <div className="electronics-page">
          <h1>Componentes</h1>
          <div className="product-grid">
            <ProductCard
              photo="/imagenes/com disc duro.jpg"
              name="Disco Duro"
              price={499.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/com enfriamiento.jpg"
              name="Sistema de Enfriamiento"
              price={299.99}
              onBuyClick={handleBuyClick}
            />
            <ProductCard
              photo="/imagenes/com gabinete.jfif"
              name="Gabinete"
              price={99.99}
              onBuyClick={handleBuyClick}
            />
              <ProductCard
                  photo="/imagenes/com grafica.jfif"
                  name="Tarjeta Grafica"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/com optica.jfif"
                  name="Unidad Optica"
                  price={199.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/com placa mad.jfif"
                  name="Tarjeta Madre"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/com ram.jfif"
                  name="Tarjeta Ram"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
              <ProductCard
                  photo="/imagenes/comp pros.jfif"
                  name="Procesador"
                  price={1299.99}
                  onBuyClick={handleBuyClick}
              />
          </div>
        </div>
      );
}
export default ComponentesPage;
