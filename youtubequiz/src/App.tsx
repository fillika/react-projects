import React, { FC, MouseEvent, useState, useEffect } from 'react';
import './App.scss';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuizQuestions, difficulty, TQuestionState } from './logic/API';

const TOTAL_QUESTIONS = 3;

type TAnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<TQuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<TAnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameover(false);
    const data = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty.MEDIUM);

    console.log('RENDER START TRIVIA', data);

    setQuestions(data);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      /**
       * Получаем ответ пользователя в переменную answer
       */
      const answer = event.currentTarget.value;
      /**
       * Сравниванием ответ пользователя с правильным ответом
       * и кладем результат в correct
       */
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore(prevScore => prevScore + 1);
      }

      const answerOject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers(prevAnswers => [...prevAnswers, answerOject]);

      const nextQuestion = number + 1;

      if (nextQuestion === TOTAL_QUESTIONS) {
        setGameover(true);
      }
    }
  };

  const nextQuestion = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>REACT TYPESCRIPT QUIZ</h1>

      {gameover && (
        <button className='start-button' onClick={startTrivia}>
          Start
        </button>
      )}

      {gameover && <p>Score: {score}</p>}

      {loading && <p>Loading questions...</p>}

      {!loading && !gameover && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers.length === number + 1}
          callback={checkAnswer}
        />
      )}

      {!loading && !gameover && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
        <button onClick={nextQuestion} className='next-q'>
          Next
        </button>
      )}
    </div>
  );
};

export default App;
