
// LearnNumbers.jsx
import React from 'react';
import './LearnNumbers.scss';

const LearnNumbers = () => {
  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/audio${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
  };

  const renderNumberCards = () => {
    const numbers = [...Array(10).keys()].map((i) => i + 1);
    return numbers.map((number, index) => (
      <div key={index} className="number-card" onClick={() => handleNumberClick(number)}>
        <img
          src={`img/n${number}.jpg`} // Adjust the URL to your image files
          alt={`Number ${number}`}
          className="number-image"
        />
      </div>
    ));
  };

  return (
    <div className="learn-numbers">
      <h2>Learn Numbers</h2>
      <div className="numbers-grid">{renderNumberCards()}</div>
    </div>
  );
};

export default LearnNumbers;
