/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "-270px",
          },
          "5%, 33%": {
            "margin-top": "-180px",
          },
          "38%, 66%": {
            "margin-top": "-90px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
      },
    },
  },
  plugins: [],
};
