import React from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Game/>
    </div>
  );
}

export default App;
