import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function Titulo() {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <h1 className="text-center">Bienvenido a HEIMDAL</h1>
          <h3 className="text-center">¡Tu buscador de confianza!</h3>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Titulo;