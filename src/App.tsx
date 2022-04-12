import React from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Game/>
      <Keyboard/>
    </div>
  );
}

export default App;
