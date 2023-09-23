import { useContext, useEffect } from 'react'
import { Answer, QuizContextType } from '../types/MyType';
import { QuizContext } from '../provider/QuizProvider';
import { Link } from 'react-router-dom';

const Review = () => {
  const { answers }: QuizContextType = useContext(QuizContext) as QuizContextType;
  useEffect(()=>{
    console.log("answers",answers);
  },[])
  return (
    <div className='review'> 
    {!answers && <div className='review'>
      <div>
        <p className='score'>No Grade Yet</p>
      </div>
      <Link to="/quiz" className="btnLink">
        <button>
            Begin
        </button>
        </Link>
    </div>}
      {answers && <div>
        <p className='score'>You Scored 9/10 💪</p>
      </div>}
      <div style={{display:"grid",gap:"10px", width:"100%"}} >
        {answers?.map((answer:Answer,index:number)=>(
          <div key={index} style={{border:`2px solid ${(answer.selectedAnswer).toString().toUpperCase() == (answer.correctAnswer).toUpperCase() ? "green":"red"} `,padding:"10px",fontSize:"20px",borderRadius:"10px"}}>
          <p> {answer.myQuestion} </p>
          <p style={{fontWeight:"600"}}>
            Your Answer: {(answer.selectedAnswer).toString().toUpperCase()} {(answer.selectedAnswer).toString().toUpperCase() == (answer.correctAnswer).toUpperCase() ? "✅" :"❌"}
          </p>
        </div>
        ))}
        <Link to="/quiz" className="btnLink">
        <button>
            Try Again
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Review