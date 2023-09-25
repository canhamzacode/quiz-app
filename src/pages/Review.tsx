import { useContext, useEffect, useState } from 'react';
import { Answer, QuizContextType } from '../types/MyType';
import { QuizContext } from '../provider/QuizProvider';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const Review = () => {
  const { answers }: QuizContextType = useContext(
    QuizContext
  ) as QuizContextType;
  const [score, setScore] = useState<number>(0);

  const grade = (answers: Answer[]) => {
    return answers.reduce((score, answer) => {
      const selectedAnswer = String(answer.selectedAnswer).toUpperCase();
      const correctAnswer = String(answer.correctAnswer).toUpperCase();
      if (selectedAnswer === correctAnswer) {
        return score + 1;
      } else {
        return score;
      }
    }, 0);
  };

  useEffect(() => {
    if (answers) {
      const userScore = grade(answers);
      setScore(userScore);
    }
  }, [answers]);

  return (
    <div className="review">
      {!answers && (
        <div className="review">
          <div>
            <p className="score">No Grade Yet</p>
          </div>
          <Link to="/quiz" className="btnLink">
            <button>Begin</button>
          </Link>
        </div>
      )}
      {answers && (
        <div>
          <p className="score">You Scored {score}/10 💪</p>{' '}
        </div>
      )}
      <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
        {answers?.map((answer: Answer, index: number) => (
          <div
            key={index}
            style={{
              border: `2px solid ${
                String(answer.selectedAnswer).toUpperCase() ===
                String(answer.correctAnswer).toUpperCase()
                  ? 'green'
                  : 'red'
              }`,
              padding: '10px',
              fontSize: '20px',
              borderRadius: '10px',
            }}
          >
            {answer ? <p>{parse(String(answer?.myQuestion))}</p> : ''}
            <p style={{ fontWeight: '600' }}>
              Your Answer: {String(answer.selectedAnswer)}{' '}
              {String(answer.selectedAnswer).toUpperCase() ===
              String(answer.correctAnswer).toUpperCase()
                ? '✅'
                : '❌'}
            </p>
          </div>
        ))}

        {answers && (
          <Link to="/quiz" className="btnLink">
            <button>Try Again</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Review;
