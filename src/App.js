import React from 'react';
import { GameProvider } from './context/GameContext';
import LandingPage from './components/LandingPage';
import Game from './components/Game';
import './styles/App.css';
import './styles/LandingPage.css';

function App() {
  const [gameLevel, setGameLevel] = React.useState(null);

  return (
    <GameProvider>
      <div className="app">
        <h1>K2Wordz</h1>
        {gameLevel ? (
          <Game level={gameLevel} />
        ) : (
          <LandingPage setGameLevel={setGameLevel} />
        )}
      </div>
    </GameProvider>
  );
}

export default App;
