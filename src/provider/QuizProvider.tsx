import { createContext, useState, ReactNode } from 'react';
import { Answer, QuizContextType } from '../types/MyType';

type QuizProviderProps = {
  children: ReactNode;
};
const QuizContext = createContext<QuizContextType | undefined>(undefined);

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [answers, setAnswers] = useState<Answer[] | null>(null);

  const quizContextValue: QuizContextType = {
    answers,
    setAnswers,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
export { QuizProvider, QuizContext };
