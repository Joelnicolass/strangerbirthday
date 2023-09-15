"use client";

import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function RootProvider({ children }) {
  useEffect(() => {
    const isSafari =
      navigator.userAgent.indexOf("Safari") !== -1 &&
      navigator.userAgent.indexOf("Chrome") === -1;

    const isDesktop = window.innerWidth > 640;

    if (isSafari && isDesktop) {
      const style = document.createElement("style");
      style.innerHTML = `
        .atropos-rotate, .atropos-scale {
          display: initial !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return <ParallaxProvider>{children}</ParallaxProvider>;
}
