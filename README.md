# Quiz App 🎯

A fun and interactive trivia quiz application that tests your knowledge with True or False questions! Challenge yourself with 10 hard-difficulty questions and see if you can score 100%.

## 🎮 How to Play the Game

### Starting the Quiz
1. When you open the app, you'll see the welcome screen with a "Begin" button
2. Click the **"Begin"** button to start the quiz

### Answering Questions
1. You will be presented with **10 True or False questions** one at a time
2. Read each question carefully
3. Click either:
   - **✅ True** - if you think the statement is correct
   - **❌ False** - if you think the statement is incorrect
4. Your selected answer will be highlighted (green for True, red for False)
5. Once you've selected an answer, click the **"Continue"** button to move to the next question
6. The progress indicator at the top shows which question you're on (e.g., "1 out of 10")

### Important Notes
- ⚠️ You must select an answer before you can continue to the next question
- 📝 All questions are pulled from the Open Trivia Database and are set to hard difficulty
- 🔄 Each question also displays its category (e.g., Science, History, etc.)

### Completing the Quiz
1. After answering all 10 questions, click the **"Submit"** button on the last question
2. You'll be taken to the Review page where you can see:
   - Your final score out of 10 (e.g., "You Scored 7/10 💪")
   - All your answers highlighted in green (correct) or red (incorrect)
   - The questions you answered along with your selected answers
   - Whether each answer was correct ✅ or incorrect ❌

### Retaking the Quiz
- On the Review page, click **"Try Again"** to take a new quiz with different questions
- Each time you play, you'll get a fresh set of 10 random True/False questions

## ✨ Features

- 📚 10 random True/False trivia questions per quiz
- 🎲 Questions fetched from the Open Trivia Database API
- 🏆 Instant score calculation
- 📊 Detailed review of all answers
- 🎨 Clean and intuitive user interface
- 📱 Responsive design
- ✅ Visual feedback for correct answers (green)
- ❌ Visual feedback for incorrect answers (red)

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **HTML React Parser** - For parsing HTML entities in questions
- **Open Trivia Database API** - Question source

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Yarn or npm package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/canhamzacode/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)
   - Start playing the quiz!

## 📜 Available Scripts

In the project directory, you can run:

- `yarn dev` or `npm run dev` - Runs the app in development mode
- `yarn build` or `npm run build` - Builds the app for production
- `yarn preview` or `npm run preview` - Preview the production build locally
- `yarn lint` or `npm run lint` - Lint the codebase for errors
- `yarn format` or `npm run format` - Format code using Prettier
- `yarn format-check` or `npm run format-check` - Check code formatting

## 🏗️ Build for Production

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed.

## 📝 Project Structure

```
quiz-app/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Body.tsx     # Welcome screen
│   │   ├── NavBar.tsx   # Navigation bar
│   │   └── QuizCard.tsx # Quiz question card
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Home page
│   │   ├── MyQuiz.tsx   # Quiz page
│   │   └── Review.tsx   # Review/Results page
│   ├── provider/        # Context providers
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🎯 Tips for Getting 100%

- 📖 Read each question carefully
- 🤔 Think before you answer
- 🧠 Trust your knowledge
- 🔄 Try again if you don't get 100% - you'll get new questions each time!

## 🌐 API

This app uses the [Open Trivia Database API](https://opentdb.com/) to fetch trivia questions.

---

Happy Quizzing! 🎉
