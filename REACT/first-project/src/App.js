import './App.css';
import Events from './components/Events';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Events nummero="1" />
      <Events nummero="2" />
      <Form />
    </div>
  );
}

export default App;