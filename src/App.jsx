import { useState } from "react"


function App() {
  const [currentQuestion, setCurrentQuestion] =useState(0)
  const [score, setScore] =useState(0)
  const [showScore, setShowScore] =useState(false)
  const questions = [
    {
      question: 'Where does the Sun rises?',
      options: ['East', 'West', 'North', 'South'],
      correctAnswer: 'East'
    },
    {
      question: 'Capital of Pakistan?',
      options: ['Peshawar', 'Lahore', 'Karachi', 'Islamabad'],
      correctAnswer: 'Islamabad'
    },
    {
      question: 'What is 2+1?',
      options: ['5', '6', '3', '2'],
      correctAnswer: '3'
    },
    {
      question: 'Who is the Prime Minister of Pakistan?',
      options: ['Zardari', 'Imran Khan', 'Maryam Nawaz', 'Shehbaz Shareef'],
      correctAnswer: 'Shehbaz Shareef'
    },
    {
      question: 'Who has most centuries in ODIs?',
      options: ['Virat Kholi', 'Sachin Tendulkar', 'Babar Azam', 'Steve Smith'],
      correctAnswer: 'Virat Kholi'
    },
    {
      question: 'Which is world largest River?',
      options: ['River Nile', 'Amazon River', 'SaifulMalook Lake', 'Chenab River'],
      correctAnswer: 'Amazon River'
    },
    {
      question: 'Who is finance Minister of Pakistan?',
      options: ['Ishaq Dar', 'Mohsin Naqvi', 'Muhammad Aurangzeb', 'Atif Bajwa'],
      correctAnswer: 'Muhammad Aurangzeb'
    },
    {
      question: 'Cordoba is a city of ________?',
      options: ['Iraq', 'Mauritania', 'Spain', 'Iran'],
      correctAnswer: 'Spain'
    },
    {
      question: 'The Godray Pass is Close to the border of___________?',
      options: ['Iran', 'Afghanistan', 'India', 'Arabian Sea'],
      correctAnswer: 'Afghanistan'
    },
    {
      question: 'Who invented Typewriter___________?',
      options: ['Haechel', 'Sholes', 'Einstein', 'Caxton'],
      correctAnswer: 'Sholes'
    },
  ]

  function handleOptionClick(selectedOption){
    if(selectedOption === questions[currentQuestion].correctAnswer){
      setScore(score+1)
    }

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length){
       setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)
    }
    
  }

  return (
    <div className="root-container">
      <h1 className="main-heading">Quiz Application</h1>
          
      {/* {`You Got ${score} question right out of ${questions.length} `} */}
      {showScore ? (
        <p className="score-statement">You Got {score} question right out of {questions.length}.  </p>
      ):(
       <>      
       <h3 className="current-question">{questions[currentQuestion].question}</h3>
       <div className="options-container">
       {questions[currentQuestion].options.map((option,index)=>{
         return <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
       })}

       </div>
      </>
   )}
    </div>
  )
}

export default App
