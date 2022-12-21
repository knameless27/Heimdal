import './App.css';
import Navbar from './components/navbar';
import Consulta from './components/consulta';
import Titulo from './components/login';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />
      <Titulo />
      <Consulta />
      <br />
    </div>
  );
}

export default App;
