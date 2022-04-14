import React from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import FloatHelp from './components/FloatHelp'
import Keyboard from './components/Keyboard';
import 'animate.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Game/>
      <FloatHelp/>
    </div>
  );
}

export default App;
