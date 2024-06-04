import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import Board from './Board';
import Keyboard from './Keyboard';

const Game = ({ level }) => {
  const { startGame } = useContext(GameContext);

  useEffect(() => {
    startGame(level);
  }, [level]);

  return (
    <>
      <Board />
      <Keyboard />
    </>
  );
};

export default Game;
