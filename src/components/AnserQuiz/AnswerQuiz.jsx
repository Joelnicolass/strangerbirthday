import React from "react";

const AnswerQuiz = ({
  answers = [
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
  ],
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
          <div
            key={index}
            className={`hover:bg-white hover:text-black hover:cursor-pointer hover:shadow-lg transition-all duration-500 ease-in-out transform ${
              isEven ? "hover:-rotate-2" : "hover:rotate-2"
            }`}
            style={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              width: "100%",
              border: "1px solid white",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <span>{text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerQuiz;
