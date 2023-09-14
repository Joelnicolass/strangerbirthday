"use client";

import React, { useEffect } from "react";
import useSound from "use-sound";

const Audio = () => {
  /* const [play] = useSound("/song.mp3", {
    volume: 0.5,
    interrupt: true,
  });

  useEffect(() => {
    play();
  }, [play]); */

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem",
        color: "white",
        fontSize: "1.5rem",
      }}
    >
      Audio
    </div>
  );
};

export default Audio;
