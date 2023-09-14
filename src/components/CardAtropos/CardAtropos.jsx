import React from "react";
import Atropos from "atropos/react";

const CardAtropos = ({ children, ...props }) => {
  return (
    <Atropos
      activeOffset={50}
      shadowScale={1.05}
      highlight={false}
      rotateXMax={5}
      rotateYMax={5}
      {...props}
    >
      {children}
    </Atropos>
  );
};

export default CardAtropos;
