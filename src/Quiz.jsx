import React, { useState } from 'react';
import { Navigate } from "./Navigate";

export const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = questions[questionIndex];

    if (currentQuestion.correctAnswer === selectedAnswer && !correctAnswers.includes(selectedAnswer)) {
      setCorrectAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
    }

    setQuestionIndex(prevIndex => prevIndex + 1);
  };

  const renderQuestion = () => {
    if (questionIndex >= questions.length) {
      console.log("Correct Answers:", correctAnswers);
      return (
        <div>
          <h2>Quiz Completed!</h2>
        </div>
      );
    }

    const currentQuestion = questions[questionIndex];

    return (
      <div>
        <h2>Question {questionIndex + 1}</h2>
        <p>{currentQuestion.text}</p>
        {currentQuestion.choices.map((choice, choiceIndex) => (
          <div key={choiceIndex}>
            <input
              type="radio"
              value={choice}
              checked={false}
              onChange={() => handleAnswerSubmit(choice)}
            />
            {choice}
          </div>
        ))}
        <button onClick={() => handleAnswerSubmit('')}>Skip</button>
      </div>
    );
  };

  return (
    <>
      <Navigate />
      <div>
        <h1>Квиз</h1>
        {renderQuestion()}
      </div>
    </>
  );
};

const questions = [
  {
    text: 'What is the capital of France?',
    choices: ['Paris', 'Berlin', 'London'],
    correctAnswer: 'Paris',
  },
  {
    text: 'Which programming language is known for its use in web development?',
    choices: ['Java', 'Python', 'JavaScript'],
    correctAnswer: 'JavaScript',
  },
  {
    text: 'What is the largest planet in our solar system?',
    choices: ['Earth', 'Jupiter', 'Mars'],
    correctAnswer: 'Jupiter',
  },
  {
    text: 'Which of the following is a CSS framework?',
    choices: ['React', 'Vue', 'Bootstrap'],
    correctAnswer: 'Bootstrap',
  },
  {
    text: 'Who is the author of "Romeo and Juliet"?',
    choices: ['Charles Dickens', 'William Shakespeare', 'Jane Austen'],
    correctAnswer: 'William Shakespeare',
  },
];
