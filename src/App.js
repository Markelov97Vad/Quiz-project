import './index.css';
import questions from './utils/questions';
import Result from './components/Result';
import Game from './components/Game';
import { useState } from 'react';


function App() {

  const [step, setStep] = useState(0);
  const [correct, setCorrect ] = useState(0);
  const question = questions[step];

  const handleChangeClick = (index) => {
    console.log(index);
    setStep(step + 1);

    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      { step !== questions.length ?
        <Game step={step} question={question} handleClick={handleChangeClick} /> : <Result correct={correct}/>}
      {/* <Result /> */}
    </div>
  );
}

export default App;
