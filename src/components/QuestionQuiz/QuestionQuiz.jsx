import React from "react";

const QuestionQuiz = ({
  title,
  text,
  colorTitle = "red",
  colorText = "white",
}) => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <h1
        data-atropos-offset="2"
        style={{
          color: colorText,
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "start",
        }}
      >
        <span style={{ color: colorTitle, fontWeight: "bold" }}>{title}</span>{" "}
        {text}
      </h1>
    </div>
  );
};

export default QuestionQuiz;
