import  { useEffect, useState } from 'react'
import QuizCard from '../components/QuizCard'
import { Question, Answer } from '../types/MyType';


const MyQuiz = () => {
  const [quizQuestion,setQuizQuestion] = useState<Question[] | null>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuizQuestion(data.results);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  if(loading){
    return <div>Loading...</div>;
  }
  return (
    <QuizCard currentIndex={currentIndex} 
    setCurrentIndex={setCurrentIndex}  
    length={quizQuestion?.length || 0} 
    quizData={quizQuestion?.[currentIndex] as Question || {}}
    />
  )
}

export default MyQuiz