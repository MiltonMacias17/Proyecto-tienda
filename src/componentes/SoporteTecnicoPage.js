import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../estilos/SoporteTecnicoPage.css';

const SoporteTecnicoPage = () => {
  const handleEnviarClick = () => {
    
    alert('Formulario enviado correctamente');
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Explique su queja en el siguiente recuadro</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" onClick={handleEnviarClick}>
        Enviar
      </Button>
    </Form>
  );
}

export default SoporteTecnicoPage;