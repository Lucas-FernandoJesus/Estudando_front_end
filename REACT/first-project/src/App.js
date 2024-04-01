import './App.css';
import SayMyNameIs from './components/SayMyNameIs';
import Pessoa from './components/Pessoa';
function App() {
  const name = "Alucard";
  return (
    <div className="App">
      <SayMyNameIs name="Lucas" />
      <SayMyNameIs name="Sebastian" />
      <SayMyNameIs name={name} />
      <Pessoa 
          name = "Sebastian"
          age = "412"
          prof = "Developer"
          photo = "https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;