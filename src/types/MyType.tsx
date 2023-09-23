import React, { ReactNode } from 'react';
export type Question = {
  category: string;
  type: boolean;
  difficulty: string;
  question: string;
  correct_answer: boolean;
  incorrect_answers: string[];
};
export type MyFunctionType = () => void;

export type Answer = {
  questionIndex: number;
  selectedAnswer: boolean;
  correctAnswer: boolean;
  myQuestion: string;
};

export type QuizContextType = {
  answers: Answer[] | null;
  setAnswers: React.Dispatch<React.SetStateAction<Answer[] | null>>;
};

export type QuizProviderProps = {
  children: ReactNode;
};
