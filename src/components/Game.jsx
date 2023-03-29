import React from "react";
import questions from "../utils/questions";

function Game({step, question, handleClick}) {

  const percentage = Math.round(step / questions.length * 100);
  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        { question.variants.map((item, index) => (
          <li key={item} onClick={() => handleClick(index)}>{item}</li>
        ))
       }
      </ul>
    </>
  );
}

export default Game