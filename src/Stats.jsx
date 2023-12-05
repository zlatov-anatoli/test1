import React, {useEffect, useState} from 'react';
import {Navigate} from "./Navigate";

export const Stats = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);


  return (
    <>
      <Navigate/>
      <div>
        <h1>Статистика</h1>
        <p>Количество верных ответов: {correctAnswers}</p>
      </div>
    </>
  );
};

