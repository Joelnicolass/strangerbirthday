import React, { useState } from "react";

import { motion } from "framer-motion";

const AnswersQuiz = ({
  answers = [],
  hasAnswered,
  onClicked = (answer) => {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
      }}
    >
      {answers.map((answer, index) => {
        const { text } = answer;
        const isEven = index % 2 === 0;

        return (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "backOut",
            }}
            key={answer.text}
            className={`hover:bg-white 
            ${
              !hasAnswered
                ? "hover:text-black"
                : hasAnswered && !answer.correct
                ? "hover:text-black"
                : "hover:text-white"
            }           
            ${hasAnswered && !answer.correct ? "opacity-50" : ""}
            ${hasAnswered && answer.correct ? "hover-text-white" : ""}
             hover:cursor-pointer hover:shadow-lg transition-all duration-500 ease-in-out transform ${
               isEven ? "hover:-rotate-2" : "hover:rotate-2"
             } ${
              hasAnswered
                ? answer.correct
                  ? ""
                  : isEven
                  ? "rotate-2"
                  : "-rotate-2"
                : ""
            }
            `}
            style={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              width: "100%",
              border: "1px solid white",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: hasAnswered && answer.correct && "#33a466",
            }}
            onClick={() => {
              onClicked(answer);
            }}
          >
            <span>{text}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnswersQuiz;
