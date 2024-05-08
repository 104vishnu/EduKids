// Telugu.jsx
import React from 'react';
import './Telugu.scss';

const Telugu = () => {
  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/tel${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
  };

  const renderTeluguDigits = () => {
    const teluguDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return teluguDigits.map((digit, index) => (
      <div key={index} className="telugu-digit" onClick={() => handleNumberClick(index + 1)}>
        {digit}
      </div>
    ));
  };

  return (
    <div className="telugu">
      <h2>Learn Telugu Digits</h2>
      <div className="telugu-grid">{renderTeluguDigits()}</div>
    </div>
  );
};

export default Telugu;
