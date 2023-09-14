import { RootProvider } from "@/providers/RootProvider";
import "./globals.css";
import "atropos/css";

import localFont from "next/font/local";

const strangerThingsFont = localFont({
  src: "../../public/BenguiatBold.ttf",
});

export const metadata = {
  title: "Stranger Birthday",
  description: "Welcome to Stranger Birthday 🎉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={strangerThingsFont.className}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
