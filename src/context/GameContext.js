import React, { createContext, useContext, useState } from 'react';
import easyWords from '../words/easy.json'
import mediumWords from '../words/medium.json'
import hardWords from '../words/hard.json'
const GameContext = createContext();
const useGameContext = ()=>{
  return useContext(GameContext)
}

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);// [['','',''], [1,2,3], [1,2,3]]
  //const initialBoard = Array(6).fill().map(() => Array(solution.length).fill({ letter: '', flipped: false }));
  //const [board, setBoard] = useState(initialBoard);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [solution, setSolution] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const startGame = (level) => {
    
    let words;
    switch(level){
      case "easy": 
        words = easyWords;
        break;
      case "medium": 
        words = mediumWords;
        break;
      case "hard": 
        words = hardWords;
        break;
      default: break
    }

    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSolution(randomWord);

    let cleanBoard = []
    for(let i = 0; i < 7; i++){
      cleanBoard.push(Array(level === 'easy' ? 3 : level === 'medium' ? 5 : 7).fill(''))
    }
    setBoard(cleanBoard)
    setCurrentRow(0);
    setCurrentCol(0);
    setGameOver(false);
  };

  const addLetter = (letter) => {
    console.log(letter);
    if (currentCol < solution.length && currentRow < 6) {
      const newBoard = [...board];
      newBoard[currentRow][currentCol] = letter;
      setBoard(newBoard);
      setCurrentCol(currentCol + 1);
    } else if (currentCol === solution.length) {
      alert ('We only need ' + solution.length + ' letters. Please press Enter to see if you are correct');
    }
  };

  const removeLetter = () => {
    if (currentCol > 0 && currentRow < 6) {
      const newBoard = [...board];
      newBoard[currentRow][currentCol - 1] = '';
      setBoard(newBoard);
      setCurrentCol(currentCol - 1);
    }
  };

  // this need to be fixed, need to check Guess is correct length, in the dictionary, before checking for letters and placement.
  const checkGuess = () => {
    if (currentCol === solution.length) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
  };

  return (
    <GameContext.Provider value={{ board, addLetter, removeLetter, checkGuess, gameOver, startGame, solution, useGameContext, currentRow}}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
