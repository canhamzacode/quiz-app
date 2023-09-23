import quiz from "../assets/images/quiz.svg"
import {Link} from "react-router-dom"

const Body = () => {
  return (
    <div className='body'>
        <div>
            <img src={quiz} alt="" className="image" />
        </div>
        <div>
        <h2>Welcome to the Quiz Challenge</h2>
        <p>You will be presented with 10 True or False questions</p>
        <p>Can you score 100%?</p>
        <Link to="/quiz" className="btnLink">
        <button>
            Begin
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Body