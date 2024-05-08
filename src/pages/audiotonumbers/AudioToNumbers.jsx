


import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './AudioToNumbers.scss';

function AudioToNumbers() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const questions = [
    {
      id: 1,
      audio: 'question/1.mp3',
      correctOption: 1,
      options: ['1', '2', '3', '4']
    },
    {
      id: 2,
      audio: 'question/2.mp3',
      correctOption: 2,
      options: ['1', '2', '4', '3']
    },
    {
      id: 3,
      audio: 'question/3.mp3',
      correctOption: 3,
      options: ['2', '4', '3', '6']
    },
    {
      id: 4,
      audio: 'question/4.mp3',
      correctOption: 4,
      options: ['1', '5', '6', '4']
    },
    {
      id: 5,
      audio: 'question/5.mp3',
      correctOption: 1,
      options: ['5', '6', '7', '8']
    },
    {
      id: 6,
      audio: 'question/6.mp3',
      correctOption: 2,
      options: ['5', '6', '8', '9']
    },
    {
      id: 7,
      audio: 'question/7.mp3',
      correctOption: 1,
      options: ['7', '8', '9', '10']
    },
    {
      id: 8,
      audio: 'question/8.mp3',
      correctOption: 3,
      options: ['10', '9', '8', '11']
    },
    {
      id: 9,
      audio: 'question/9.mp3',
      correctOption: 4,
      options: ['7', '10', '11', '9']
    },
    {
      id: 10,
      audio: 'question/10.mp3',
      correctOption: 1,
      options: ['10', '1', '9', '8']
    },
  ];

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleOptionClick = (option, correctOption) => {
    if (isCorrect !== null) return;

    const correct = option === correctOption;
    setIsCorrect(correct);
    setSelectedOption(option);

    if (correct) {
      playAudio('aud/correct.mp3');
      setTimeout(() => {
        if (currentQuestion === questions.length - 1) setShowModal(true);
        else goToNextQuestion();
      }, 3000);
    } else {
      playAudio('aud/wrong.mp3');
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(null);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowModal(false);
  };

  return (
    <div className="audio-to-numbers">
      <div className="question">
        <button className="play-button" onClick={() => playAudio(questions[currentQuestion].audio)}>Play Audio</button>
        <audio controls src={questions[currentQuestion].audio}></audio>
      </div>

      <div className="options">
        <div className="options-container">
          <div className="first">
            {questions[currentQuestion].options.slice(0, 2).map((option, index) => (
              <div className={`option${index + 1}`} key={index}>
                <button
                  onClick={() => handleOptionClick(index + 1, questions[currentQuestion].correctOption)}
                  className={selectedOption === index + 1 ? (isCorrect ? 'correct' : 'wrong') : ''}
                  disabled={isCorrect !== null}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
          <div className="second">
            {questions[currentQuestion].options.slice(2).map((option, index) => (
              <div className={`option${index + 3}`} key={index}>
                <button
                  onClick={() => handleOptionClick(index + 3, questions[currentQuestion].correctOption)}
                  className={selectedOption === index + 3 ? (isCorrect ? 'correct' : 'wrong') : ''}
                  disabled={isCorrect !== null}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="modal">
          <div className="modal-content">
            {isCorrect ? (
              <>
                <p>Congratulations! You answered correctly.</p>
                {currentQuestion === questions.length - 1 ? (
                  <p>You have finished all questions. What would you like to do?</p>
                ) : (
                  <p>Proceed to the next question.</p>
                )}
              </>
            ) : (
              <p>Sorry, that's incorrect. You can start again or end the quiz.</p>
            )}
            <div className="options">
              <button onClick={handleRestart} className="link-button">Start Again</button>
              <Link to="/activity" className="link-button">End</Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AudioToNumbers;

