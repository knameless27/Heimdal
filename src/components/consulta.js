import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, {useState} from 'react';


function Consulta() {
  let [usuario, setUsuario] = useState({})


  function buscarUsuario(e) {
    console.log(e)
    e.preventDefault();
    if (e.target[0].value !== undefined) {
      // axios.nombre(e.target[0].value).then((res) => {
      //   setUsuario(res)
      //   console.log(usuario)
      //   console.log(usuario.id)
      // }).catch((error) => {
      //   console.log(error)
      // });
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
      <Row>
        <p>{usuario?.name}</p>
        <p>{usuario?.id}</p>
        <p>{usuario?.profileIconId}</p>
      </Row>
    </Container>
  );
}


export default Consulta;