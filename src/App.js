
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {


  return (
    <Router>
      <ul> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </Router>

  )
}

export default App
