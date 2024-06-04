import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({ setGameLevel }) => {
  return (
    <div className="landing-page">
      <h2>Select Difficulty Level</h2>
      <button className="lpBtn1" onClick={() => setGameLevel('easy')}>Easy (3 letter words)</button>
      <button className="lpBtn2" onClick={() => setGameLevel('medium')}>Medium (5 letter words)</button>
      <button className="lpBtn3" onClick={() => setGameLevel('hard')}>Hard (7 letter words)</button>
    </div>
  );
};

export default LandingPage;
