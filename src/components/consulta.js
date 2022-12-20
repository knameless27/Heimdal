import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import busqueda from './busquedas';
import UsuarioComp from './UsuarioComp.js';

function Consulta() {
  let [usuario, setUsuario] = useState({})

  function buscarUsuario(e) {
    e.preventDefault();
    if (e.target[0].value !== undefined) {
      busqueda.buscarNombre(e.target[0].value).then((res) => {
        setUsuario(res)
      })
    }
  }

  return (
    <Container>
      <Row><Col><hr /></Col></Row>
      <Row>
        <Col>
          <Form onSubmit={buscarUsuario}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>¡Ingresa tu nombre de invocador!</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row><Col><hr /></Col></Row>
      <Row>
        <UsuarioComp Usuario={usuario}/>
      </Row>
    </Container>
  );
}


export default Consulta;