import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./Layout.jsx/AppLayout"
import MyQuiz from "./pages/MyQuiz"
import {QuizProvider} from "./provider/QuizProvider"
import Review from "./pages/Review"

function App() {
  
  return (
    <BrowserRouter>
    <QuizProvider>
    <Routes>
      <Route path="/" element={<AppLayout/>}  >
      <Route index element={<Home/>}/>
      <Route path="/quiz" element={<MyQuiz/>}/>
      <Route path="/review" element={<Review/>}/>
      </Route>
    </Routes>
    </QuizProvider>
    </BrowserRouter>
  )
}

export default App
