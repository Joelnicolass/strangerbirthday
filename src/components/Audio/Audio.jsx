"use client";

import React, { useEffect, useRef } from "react";
import useSound from "use-sound";

const AudioPlayer = () => {
  const isLoaded = useRef(false);
  const isPlaying = useRef(false);

  const [play] = useSound("/song.mp3", {
    volume: 0.5,
    interrupt: true,
    onload: () => {
      isLoaded.current = true;
      console.log("loaded");
    },
  });

  useEffect(() => {
    if (!isLoaded.current) return;

    const refmouse = document.addEventListener("mousemove", () => {
      if (isPlaying.current) return;
      play();

      isPlaying.current = true;
    });

    const refscroll = document.addEventListener("scroll", () => {
      if (isPlaying.current) return;
      play();

      isPlaying.current = true;
    });

    return () => {
      document.removeEventListener("click", refmouse);
    };
  }, [isLoaded, play]);

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
    ></div>
  );
};

export default AudioPlayer;
