


import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Subtraction.scss';

function Subtraction() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [correctDifference, setCorrectDifference] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (currentQuestion < 10) {
      generateQuestion();
    } else {
      setQuizCompleted(true);
      setShowModal(true);
    }
  }, [currentQuestion]);

  const generateQuestion = () => {
    let n1, n2;
    do {
      n1 = Math.floor(Math.random() * 10) + 1;
      n2 = Math.floor(Math.random() * n1) + 1;
    } while (n1 - n2 <= 0);
    setNum1(n1);
    setNum2(n2);
    setCorrectDifference(n1 - n2);
    const generatedOptions = generateOptions(n1 - n2);
    setOptions(generatedOptions);
  };

  const generateOptions = (correctAnswer) => {
    const options = [];
    options.push(correctAnswer);
    while (options.length < 4) {
      const randomOption = Math.floor(Math.random() * 10) + 1;
      if (!options.includes(randomOption) && randomOption !== correctAnswer) {
        options.push(randomOption);
      }
    }
    shuffleArray(options);
    return options;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleOptionClick = (option) => {
    const correct = option === correctDifference;

    if (correct) {
      setIsCorrect(true);
      playCorrectAudio();
    } else {
      setIsCorrect(false);
      playWrongAudio();
      setShowModal(true);
    }

    setSelectedOption(option);

    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setIsCorrect(null);
      setSelectedOption(null);
    }, 3000);
  };

  const playCorrectAudio = () => {
    const correctAudio = new Audio('aud/correct.mp3');
    correctAudio.play();
  };

  const playWrongAudio = () => {
    const wrongAudio = new Audio('aud/wrong.mp3');
    wrongAudio.play();
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowModal(false);
    setQuizCompleted(false);
    generateQuestion();
  };

  return (
    <div className="subtraction">
      <div className="question">
        <p>{num1} - {num2} = ?</p>
      </div>

      <div className="options">
        {options.map((option, index) => (
          <div className={`option${index + 1}`} key={index}>
            <button
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option ? (isCorrect ? 'correct' : 'wrong') : ''}
              disabled={isCorrect !== null}
            >
              {option}
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={showModal || quizCompleted} onRequestClose={() => setShowModal(false)}>
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

export default Subtraction;
