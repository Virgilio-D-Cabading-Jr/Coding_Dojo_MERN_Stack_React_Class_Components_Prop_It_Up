import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'; './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <h1>Prop It Up</h1>
      <p>
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      </p>
    </div>
  );
}

export default App;