import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello Adithya </p>
        
        <div className="app-container">
          <Profile name="Aditya" />
        </div>
      </header>
    </div>
  );
}

export default App;
