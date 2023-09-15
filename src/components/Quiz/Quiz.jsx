"use client";

import React, { useState } from "react";
import CardAtropos from "../CardAtropos/CardAtropos";
import QuestionQuiz from "../QuestionQuiz/QuestionQuiz";
import AnswersQuiz from "../AnserQuiz/AnswerQuiz";

import styles from "./Quiz.module.css";
import Glitch from "../Glitch/Glitch";
import { MdArrowCircleRight, MdDownload } from "react-icons/md";
import Ticket from "../Ticket/Ticket";
import html2canvas from "html2canvas";

import { motion } from "framer-motion";

const Quiz = ({ quiz = {} }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [points, setPoints] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (isFinished) {
    return (
      <>
        <Ticket points={points} />
        <MdDownload
          className="text-4xl text-white hover:text-stone-50 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={() => {
            const element = document.getElementById("ticket");

            html2canvas(element).then((canvas) => {
              const imgData = canvas.toDataURL("image/png");
              const link = document.createElement("a");
              link.download = "ticket.png";
              link.href = imgData;
              link.click();
            });
          }}
        />
      </>
    );
  }

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
        className={`absolute bottom-0 right-0 mb-4 mr-4 text-4xl text-white hover:text-violet-200 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${
          hasAnswered ? "opacity-100" : "opacity-20"
        }`}
        style={{
          filter: "drop-shadow(0 0 0.75rem #ff00d94d)",
          margin: "0 auto",
        }}
        size={30}
        onClick={() => {
          if (!hasAnswered) return;

          if (currentQuestion === quiz.questions.length - 1) {
            setIsFinished(true);
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
