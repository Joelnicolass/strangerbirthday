"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export function RootProvider({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
