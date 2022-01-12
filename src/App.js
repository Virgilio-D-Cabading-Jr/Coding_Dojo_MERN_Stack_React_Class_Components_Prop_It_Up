import logo from './logo.svg';
import './App.css';

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