import React, { FC, MouseEvent } from 'react';

type TProps = {
  question: string;
  answers: string[];
  callback: (event: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: boolean;
  questionNumber: number;
  totalQuestions: number;
};

export const QuestionCard: FC<TProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className='question-card'>
      <h2>
        Question: {questionNumber} / {totalQuestions}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button value={answer} disabled={userAnswer} onClick={callback}>
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
