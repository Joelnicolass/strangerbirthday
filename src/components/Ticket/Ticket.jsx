import React from "react";
import CardAtropos from "../CardAtropos/CardAtropos";
import Image from "next/image";

import styles from "./Ticket.module.css";

const Ticket = ({ points }) => {
  const oro = {
    text: "-PASE DE ORO-",
    color: "bg-gradient-to-br from-amber-400 to-amber-700",
    stroke: "1px #feda63",
    colorStroke: "#feda63",
  };

  const plata = {
    text: "-PASE DE PLATA-",
    color: "bg-gradient-to-br from-gray-400 to-gray-700",
    stroke: "1px #d4d4d4",
    colorStroke: "#d4d4d4",
  };

  const bronce = {
    text: "-PASE DE BRONCE-",
    color: "bg-gradient-to-br from-orange-400 to-orange-700",
    stroke: "1px #ff9650",
    colorStroke: "#ff9650",
  };

  const ticket = points >= 15 ? oro : points >= 8 ? plata : bronce;

  return (
    <CardAtropos id="ticket" className={styles.container} highlight={true}>
      <div
        className={`transform transition-all duration-300 ease-in-out cursor-crosshair ${ticket.color} ${styles.general}`}
        style={{
          border: `4px solid ${ticket.colorStroke}`,
        }}
      >
        <div></div>
        <span
          className={styles.title}
          style={{
            webkitTextStroke: ticket.stroke,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <span className={styles.hashtag}>#STRANGERBIRTHDAY</span>
          </div>
          {ticket.text}
          <div>
            <Image
              className={styles.img}
              src="/images/sticker.png"
              width={150}
              height={150}
              alt="sticker"
              style={{
                transform: "rotate(10deg)",
                filter: "invert(0) brightness(1) contrast(1) ",
                mixBlendMode: "plus-lighter",
              }}
            />
          </div>
        </span>
        <div></div>
      </div>
    </CardAtropos>
  );
};

export default Ticket;
