import { useEffect, useState,useContext } from 'react'
import { Answer, Question,QuizContextType } from '../types/MyType';
import { QuizContext } from '../provider/QuizProvider';
import { useNavigate } from 'react-router-dom';

interface QuestionProps {
    quizData: Question;
    currentIndex: number,
    length:number,
    setCurrentIndex:(index: number) => void,
    // setAnswers: (answers: Answer[] | null) => void;
  }

const QuizCard = ({currentIndex,length,setCurrentIndex,quizData}:QuestionProps) => {

    const {  setAnswers }: QuizContextType = useContext(QuizContext) as QuizContextType;
    const navigate = useNavigate();
    const [answer,setAnswer] = useState<boolean>();
    const [error,setError] = useState<string>()
    const [preAnswer,setPreAnswer] = useState<Answer[]>();
    
    useEffect(()=>{
        console.log(preAnswer);    
    },[preAnswer])
    
    const nextQuiz = ()=>{
        if (answer != null && currentIndex < length) {            
            setError("");
            const newAnswer = {
                questionIndex: currentIndex,
                selectedAnswer: answer,
                correctAnswer: quizData.correct_answer,
                myQuestion: quizData.question
            };
            setPreAnswer((prevPreAnswer) => {
                if (prevPreAnswer) {
                  return [...prevPreAnswer, newAnswer];
                }
                return [newAnswer];
            });
            setCurrentIndex(currentIndex + 1);
            setAnswer(undefined)
        }
        else{
            setError("Answer Must Be Selected");
        }
    }

    const theTruth = ():void=>{
        setAnswer(true)
    }
    const theFasle = ():void=>{
        setAnswer(false)
    }

    const submit = () => {
        if (answer != null) {
          const newAnswer = {
            questionIndex: currentIndex,
            selectedAnswer: answer,
            correctAnswer: quizData.correct_answer,
          };
          const updatedPreAnswer = preAnswer ? [...preAnswer, newAnswer] : [newAnswer];
          setPreAnswer(updatedPreAnswer as Answer[]);
          setAnswers(updatedPreAnswer as Answer[]);
          navigate("/review");
        } else {
          setError("Answer Must Be Selected");
        }
      };
      

  return (
    <div className='quiz'>
        <p>
            {currentIndex + 1} out of 10 ({quizData?.category})
        </p>
        <h2>
            {quizData?.question}
        </h2>
        <div className='button-flex'>
        <button onClick={theTruth} className={`${answer == true ? "green":""}`}>✅ True</button>
        <button onClick={theFasle} className={`${answer == false ? "red" : ""}`}>❌ False</button>
        </div>
        <div>
            {error && <p style={{color:"red"}}> {error} </p>}
        </div>
        <div className='button-flex'>
        {currentIndex < length - 1 ?<button className='continue' onClick={nextQuiz}>
            continue
        </button>:""}
        {currentIndex == length - 1 ? <button onClick={submit}>Submit</button>:""}
        </div>
    </div>
  )
}

export default QuizCard