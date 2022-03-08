
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  let nome='Kyldare';
  return (
    <div className="App">
      <h1>Meu primeiro REACT</h1>
      <p>Óla {nome}</p>
      <Pessoa nome="Kyldare" idade="47" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
