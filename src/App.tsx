import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import FloatHelp from './components/FloatHelp'
import 'animate.css';
import './App.scss';

function App() {

  const [showHelp, setShowHelp] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className={`App ${lightTheme ? 'light-theme' : ""}`}>
      <Navbar setShowHelp={setShowHelp} lightTheme={lightTheme} setLightTheme={setLightTheme}/>
      <Game/>
      <FloatHelp showHelp={showHelp} setShowHelp={setShowHelp}/>
    </div>
  );
}

export default App;
