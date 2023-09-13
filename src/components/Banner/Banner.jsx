"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        background: "url(/images/bg.webp) no-repeat center center fixed",
      }}
    >
      <motion.div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          style={{
            filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.802))",
          }}
          priority
          src="/images/logo.png"
          alt="Stranger Birthday"
          width={400}
          height={400}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
