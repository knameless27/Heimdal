import axios from '../axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function Consulta() {
  let nombre;
  

  function buscarUsuario(e) {
    console.log(e)
    e.preventDefault();
    if (e.target[0].value !== undefined) {
      axios.nombre(e.target[0].value).then((res) => {
        console.log(res)
      }).catch((error) =>{
        console.log(error)
      });
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
              <Form.Control type="text" placeholder="Nombre" value={nombre} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}


export default Consulta;