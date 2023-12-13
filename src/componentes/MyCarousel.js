import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../estilos/MyCarousel.css';

const MyCarousel = () => {
  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'Black', 
    maxWidth: '600px',
    fontSize: '2em', 
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="/imagenes/fondo1.jfif" 
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h1>Randy-Electronicos</h1>
          <p>Los mejores articulos electronicos de toda Bolivia!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/imagenes/fondo2.jfif" 
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h1>Randy-Electronicos</h1>
          <p>Con Garanatia hasta de 3 años!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/imagenes/fondo3.jfif" 
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h1>Randy-Electronicos</h1>
          <p>Con precios accesibles para el publico!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="/imagenes/fondo4.jfif" 
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h1>Randy-Electronicos</h1>
          <p>Animate a comprar los articulos que deseas!</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default MyCarousel;