import React from "react";
import Atropos from "atropos/react";

const CardAtropos = ({ children, ...props }) => {
  return (
    <Atropos
      activeOffset={50}
      shadowScale={0}
      highlight={false}
      rotateXMax={5}
      rotateYMax={5}
      rotateTouch={"scroll-y"}
      {...props}
    >
      {children}
    </Atropos>
  );
};

export default CardAtropos;
