import React from 'react';
import Tile from './Tile';
import '../styles/Board.css';

const Row = ({ row, rowIndex }) => {
  return (
    <div className="row">
      {row.map((letter, index) => (
        <Tile key={index} index={index} letter={letter} rowIndex={rowIndex} />
      ))}
    </div>
  );
};

export default Row;
