import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Key from './Key';
import '../styles/Keyboard.css';

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const Keyboard = () => {
  const { addLetter, checkGuess } = useContext(GameContext);
  return (
    <div className="keyboard">
      {keys.map((line, lineIndex) => (
        <div key={lineIndex} className="keyboard-line">
          {line.map((key) => (
            <Key key={key} value={key} onClick={() => addLetter(key)} />
          ))}
        </div>
      ))}
      <button className="btn" onClick={checkGuess}>Enter</button>
    </div>
  );
};

export default Keyboard;
