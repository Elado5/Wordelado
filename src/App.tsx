import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import FloatHelp from './components/FloatHelp'
import 'animate.css';
import './App.scss';

function App() {

  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Game/>
      <FloatHelp/>
    </div>
  );
}

export default App;
