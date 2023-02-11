/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "tracking-in-expand-fwd":
          "tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)  both",
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
      },
      keyframes: {
        "tracking-in-expand-fwd": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(96px)",
          },
        },
      },
    },
  },
  plugins: [],
};
