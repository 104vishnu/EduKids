// Tamil.jsx
import React from 'react';
import './Tamil.scss';

const Tamil = () => {
  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/tamil${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
  };

  const renderTamilDigits = () => {
    const tamilDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return tamilDigits.map((number, index) => (
      <div key={index} className="tamil-digit" onClick={() => handleNumberClick(index + 1)}>
        {number}
      </div>
    ));
  };

  return (
    <div className="tamil">
      <h2>Learn Tamil Digits</h2>
      <div className="tamil-grid">{renderTamilDigits()}</div>
    </div>
  );
};

export default Tamil;
