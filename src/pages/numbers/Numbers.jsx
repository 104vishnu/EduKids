// Numbers.jsx
import React, { useState } from 'react';
import './Numbers.scss';

const Numbers = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/audio${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
    setCurrentNumber(number);
  };

  const handleNext = () => {
    const nextNumber = currentNumber === 10 ? 1 : currentNumber + 1;
    handleNumberClick(nextNumber);
  };

  const handlePrevious = () => {
    const previousNumber = currentNumber === 1 ? 10 : currentNumber - 1;
    handleNumberClick(previousNumber);
  };

  return (
    <div className="numbers">
      <h2>Learn Numbers</h2>
      <div className="number-slider">
        <button onClick={handlePrevious}>Previous</button>
        <div className="number-card" onClick={() => handleNumberClick(currentNumber)}>
          <img
            src={`img/n${currentNumber}.jpg`} // Adjust the URL to your image files
            alt={`Number ${currentNumber}`}
            className="number-image"
          />
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Numbers;
