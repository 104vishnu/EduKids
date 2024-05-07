

import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './CountNumbers.scss';

function CountNumbers() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      image: 'question/q1.png',
      correctOption: 4,
      options: ['5', '2', '3', '4']
    },
    {
      id: 2,
      image: 'question/q2.png',
      correctOption: 2,
      options: ['2', '3', '4', '6']
    },
    {
      id: 3,
      image: 'question/q3.png',
      correctOption: 4,
      options: ['4', '6', '8', '5']
    },
    {
      id: 4,
      image: 'question/q4.png',
      correctOption: 2,
      options: ['6', '9', '8', '7']
    },
    {
      id: 5,
      image: 'question/q5.png',
      correctOption: 1,
      options: ['1', '2', '4', '3']
    },
    // Add more questions here
    {
      id: 6,
      image: 'question/q6.png',
      correctOption: 3,
      options: ['3', '5', '8', '9']
    },
    {
      id: 7,
      image: 'question/q7.png',
      correctOption: 1,
      options: ['2', '3', '1', '4']
    },
    {
      id: 8,
      image: 'question/q8.png',
      correctOption: 4,
      options: ['5', '2', '3', '6']
    },
    {
      id: 9,
      image: 'question/q9.png',
      correctOption: 1,
      options: ['4', '7', '5', '6']
    },
    {
      id: 10,
      image: 'question/q10.png',
      correctOption: 2,
      options: ['3', '5', '8', '4']
    },
    {
      id: 11,
      image: 'question/q11.png',
      correctOption: 3,
      options: ['5', '2', '3', '7']
    },
    {
      id: 12,
      image: 'question/q12.png',
      correctOption: 1,
      options: ['2', '4', '4', '2']
    },
    {
      id: 13,
      image: 'question/q13.png',
      correctOption: 1,
      options: ['10', '9', '8', '6']
    },
    {
      id: 14,
      image: 'question/q14.png',
      correctOption: 3,
      options: ['6', '9', '8', '7']
    },
    {
      id: 15,
      image: 'question/q15.png',
      correctOption: 2,
      options: ['6', '7', '4', '5']
    },
    {
      id: 16,
      image: 'question/q16.png',
      correctOption: 3,
      options: ['3', '5', '1', '2']
    },
    {
      id: 17,
      image: 'question/q17.png',
      correctOption: 4,
      options: ['2', '3', '6', '5']
    },
    {
      id: 18,
      image: 'question/q18.png',
      correctOption: 3,
      options: ['1', '2', '4', '7']
    }
  ];

  const playCorrectAudio = () => {
    const correctAudio = new Audio('aud/correct.mp3');
    correctAudio.play();
  };

  const playWrongAudio = () => {
    const wrongAudio = new Audio('aud/wrong.mp3');
    wrongAudio.play();
  };

  const handleOptionClick = (option, correctOption) => {
    const correct = option === correctOption;

    if (correct) {
      playCorrectAudio();
      setIsCorrect(true);
      setSelectedOption(option);
      setTimeout(() => {
        if (currentQuestion === questions.length - 1) {
          setQuizCompleted(true);
          setShowModal(true);
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setIsCorrect(null);
          setSelectedOption(null);
        }
      }, 3000);
    } else {
      playWrongAudio();
      setIsCorrect(false);
      setSelectedOption(option);
      setShowModal(true); // Show modal when a wrong option is selected
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowModal(false);
    setQuizCompleted(false);
  };

  return (
    <div className="count-numbers">
      <div className="question">
        <img src={questions[currentQuestion].image} alt={`Question ${currentQuestion + 1}`} />
      </div>

      <div className="options">
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

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div className="modal">
          <div className="modal-content">
            {quizCompleted ? (
              <>
                <p>Congratulations! You have finished all questions.</p>
                <p>What would you like to do?</p>
              </>
            ) : (
              <>
                <p>Sorry, that's incorrect. You can start again or end the quiz.</p>
              </>
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

export default CountNumbers;
