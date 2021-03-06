import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';
import LightSwitch from './components/LightSwitch';

function App() {
  return (
    <div className="App">
      <div>
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Purple" />
        <PersonCard firstName="Maria" lastName="Smite" age={62} hairColor="Green" />
        <button onClick={() => alert("This button has been clicked!")}>Click Me</button>
      </div>
      <LightSwitch />
    </div>
  );
}

export default App;