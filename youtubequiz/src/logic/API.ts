import { shuffleArray } from './utils';

/**
 * Тип вопроса, который приходит после нашего fetch
 */
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type TQuestionState = Question & { answers: string[] };

/**
 * enum со сложностью вопроса
 */
export enum difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: difficulty) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data: { results: Question[] } = await (await fetch(url)).json();

  return data.results.map(question => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
  }));
};
