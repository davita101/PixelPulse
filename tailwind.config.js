/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': "rgba(0, 0, 0, 0.05) 0px 0px 0px 2px",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinity"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translate(0)" },
          to: { transform: "translate(-100%)" }
        }
      }
    },
  },
  plugins: [],
}

