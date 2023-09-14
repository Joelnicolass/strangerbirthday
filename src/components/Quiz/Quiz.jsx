"use client";

import React, { useState } from "react";
import CardAtropos from "../CardAtropos/CardAtropos";
import QuestionQuiz from "../QuestionQuiz/QuestionQuiz";
import AnswersQuiz from "../AnserQuiz/AnswerQuiz";

import styles from "./Quiz.module.css";
import Glitch from "../Glitch/Glitch";
import { MdArrowBackIosNew, MdArrowCircleRight } from "react-icons/md";

const Quiz = ({ quiz = {} }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <CardAtropos className={styles.container}>
      <Glitch className={styles.title} size={30} text="Gana tu entrada" />
      <QuestionQuiz
        title={quiz.questions[currentQuestion].title}
        text={quiz.questions[currentQuestion].text}
      />
      <AnswersQuiz
        answers={quiz.questions[currentQuestion].answers}
        hasAnswered={hasAnswered}
        onClicked={(answer) => {
          if (hasAnswered) return;

          setHasAnswered(true);

          if (answer.correct) {
            setPoints(points + 1);
          }
        }}
      />

      <MdArrowCircleRight
        className="absolute bottom-0 right-0 mb-4 mr-4 text-4xl text-white hover:text-green-300 cursor-pointer"
        size={30}
        onClick={() => {
          if (currentQuestion === quiz.questions.length - 1) {
            alert(`Has obtenido ${points} puntos`);
            return;
          }

          setCurrentQuestion(currentQuestion + 1);
          setHasAnswered(false);
        }}
      />
    </CardAtropos>
  );
};

export default Quiz;
