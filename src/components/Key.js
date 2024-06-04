import React from 'react';
import '../styles/Keyboard.css';

const Key = ({ value, onClick }) => {
  return (
    <button className="key" onClick={onClick}>
      {value}
    </button>
  );
};

export default Key;
