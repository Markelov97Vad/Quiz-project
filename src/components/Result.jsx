import React from "react";
import questions from "../utils/questions";


function Result({correct}) {

  return (
    <div className="result">
      <img className='img' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
      <h2 className='header'>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button className='button'>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;