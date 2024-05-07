// Malayalam.jsx
import React from 'react';
import './Malayalam.scss';

const Malayalam = () => {
  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/mala${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
  };

  const renderMalayalamDigits = () => {
    const malayalamDigits = ['൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯', '൧൦'];
    return malayalamDigits.map((digit, index) => (
      <div key={index} className="malayalam-digit" onClick={() => handleNumberClick(index + 1)}>
        {digit}
      </div>
    ));
  };

  return (
    <div className="malayalam">
      <h2>Learn Malayalam Digits</h2>
      <div className="malayalam-grid">{renderMalayalamDigits()}</div>
    </div>
  );
};

export default Malayalam;
