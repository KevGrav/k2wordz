import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import Board from './Board';
import Keyboard from './Keyboard';
import Modal from './Modal';

const Game = ({ level }) => {
  const { startGame, modalContent, solution } = useContext(GameContext);
  useEffect(() => {
    startGame(level);
  }, [level]);
  const restartGame = () => {
    startGame(level);
  };
  const renderModal = () => {
    if (!modalContent) return null;
    return (
      <Modal>
        <div className="modal-content">
          {modalContent === 'win' && <h2>Congratulations! You guessed the word!</h2>}
          {modalContent === 'lose' && <h2>Sorry, you did not guess the word. The word was {solution}.</h2>}
          <button onClick={restartGame}>Play Again</button>
          <button onClick={() => window.location.reload()}>Go to Landing Page</button>
        </div>
      </Modal>
    );
  };
  return (
    <>
      <Board />
      <Keyboard />
      {renderModal()}
    </>
  );
};
export default Game;