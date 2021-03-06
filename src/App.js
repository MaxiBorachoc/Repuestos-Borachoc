import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Te damos la bienvenida a Repuestos Borachoc!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ponete cómodo y elegí tranquilo.
        </a>
      </header>
    </div>
  );
}

export default App;
