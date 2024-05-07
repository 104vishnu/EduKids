// Hindi.jsx
import React from 'react';
import './Hindi.scss';

const Hindi = () => {
  const handleNumberClick = (number) => {
    const audio = new Audio(`aud/hindi${number}.mp3`); // Adjust the URL to your audio files
    audio.play();
  };

  const renderHindiNumerals = () => {
    const hindiNumerals = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०'];
    return hindiNumerals.map((numeral, index) => (
      <div key={index} className="hindi-numeral" onClick={() => handleNumberClick(index + 1)}>
        {numeral}
      </div>
    ));
  };

  return (
    <div className="hindi">
      <h2>Learn Hindi Numerals</h2>
      <div className="hindi-grid">{renderHindiNumerals()}</div>
    </div>
  );
};

export default Hindi;
