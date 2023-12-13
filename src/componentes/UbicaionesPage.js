import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const UbicaionesPage = () => {
  return (
    <div>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Electrónicos-Randy Zona Sur:</Accordion.Header>
        <Accordion.Body>
        Dirección: Av. Costanera, entre Calle 12 y Calle 13, Zona Sur. Descripción: Ubicada en el bullicioso distrito de la Zona Sur, Electrónicos-Randy Zona Sur es conocida por su amplio inventario de productos electrónicos y su ambiente moderno. Atrae a estudiantes, profesionales y entusiastas de la tecnología.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>TechPlaza El Prado:</Accordion.Header>
        <Accordion.Body>
        Dirección: Calle Potosí, esquina Av. Mariscal Santa Cruz, El Prado. Descripción: Situada en el corazón del centro histórico de La Paz, TechPlaza El Prado es una tienda emblemática que ofrece la última tecnología en un entorno que combina lo moderno con lo tradicional. Es un lugar popular para compradores y turistas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Gadgets Express Sopocachi:</Accordion.Header>
        <Accordion.Body>
        Dirección: Calle Aroma, entre Calle Pedro Salazar y Calle Sánchez Lima, Sopocachi. Descripción: Gadgets Express en Sopocachi es conocida por su enfoque en dispositivos y accesorios innovadores. La tienda atrae a una clientela joven y moderna en uno de los barrios más animados de La Paz.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>E-Tech Megastore Irpavi:</Accordion.Header>
        <Accordion.Body>
        Dirección: Av. Costanera, Irpavi, a la altura de la Calle 5. Descripción: E-Tech Megastore en Irpavi es una tienda amplia y moderna que ofrece una amplia gama de productos electrónicos. Con estacionamiento conveniente y un ambiente acogedor, es un destino popular para las familias que buscan lo último en tecnología.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Dirección: Calle 17, entre Calle 10 y Av. Sánchez Lima, Calacoto.</Accordion.Header>
        <Accordion.Body>
        Dirección: Calle 17, entre Calle 10 y Av. Sánchez Lima, Calacoto. Descripción: SmartConnections en Calacoto se especializa en dispositivos inteligentes y soluciones de conectividad. La tienda atrae a clientes que buscan la última tecnología para el hogar y la oficina en una de las áreas residenciales más exclusivas de La Paz.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}
export default UbicaionesPage;
