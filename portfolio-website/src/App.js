import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p className="greeting">
          Hi, my name is <span className="name-color">Tia!</span>
        </p>
        <p className="bio">
          I am a new graduate that is interested in user interface and databases. Thanks for stopping by!
        </p>
      </header>
    </div>
  );
}

export default App;
