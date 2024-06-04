import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Row from './Row';
import '../styles/Board.css';

const Board = () => {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <Row key={rowIndex} rowIndex={rowIndex} row={row} />
      ))}
    </div>
  );
};

export default Board;
