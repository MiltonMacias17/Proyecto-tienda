import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; 

function CustomMenu() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/electronics" className="nav-link">
          Electrodomesticos
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/laptops" className="nav-link">
          Laptops
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/compu" className="nav-link">
          Computadoras
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/perifericos" className="nav-link">
          Perifericos
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/comp" className="nav-link">
          Componentes
        </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/soporte" className="nav-link">
          Soporte Tecnico
        </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/ubicaciones" className="nav-link">
          Ubicaiones
        </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/sobrenosotros" className="nav-link">
          Sobre Nosotros
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/contactos" className="nav-link">
          Contactos
      </Link>
      </Nav.Item>
    </Nav>
  );
}

export default CustomMenu;