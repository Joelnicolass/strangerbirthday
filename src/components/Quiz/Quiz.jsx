"use client";

import React from "react";
import CardAtropos from "../CardAtropos/CardAtropos";
import QuestionQuiz from "../QuestionQuiz/QuestionQuiz";
import AnswerQuiz from "../AnserQuiz/AnswerQuiz";

import styles from "./Quiz.module.css";

const Quiz = () => {
  return (
    <CardAtropos className={styles.container}>
      <h1 className={styles.title}>Gana tu entrada!</h1>

      <QuestionQuiz
        text={
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
        }
        title={"Pregunta 1 - "}
      />

      <AnswerQuiz
        answers={[
          {
            text: "Example",
          },
          {
            text: "Example",
          },
          {
            text: "Example",
          },
          {
            text: "Example",
          },
        ]}
      />
    </CardAtropos>
  );
};

export default Quiz;
