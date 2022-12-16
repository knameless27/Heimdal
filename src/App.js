import './App.css';
import navbar from './components/navbar';
import consulta from './components/consulta';
import login from './components/login';

function App() {
  return (
    <div>
      {navbar()}
      {login()}
      {consulta()}
      <h1>XD</h1>
    </div>
  );
}

export default App;
