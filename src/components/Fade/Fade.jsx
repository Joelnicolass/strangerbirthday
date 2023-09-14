"use client";

import React from "react";

import { motion } from "framer-motion";

const Fade = ({
  children,
  duration = 0.5,
  delay = 0.5,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  ease = "easeInOut",
  ...props
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
