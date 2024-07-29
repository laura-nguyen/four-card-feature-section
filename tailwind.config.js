/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontSize: {
        hp: ".9375rem",
        p: ".8125rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      // Primary
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",

      // Neutral
      "very-dark-blue": "hsl(234, 12%, 34%)",
      "grayish-blue": "hsl(229, 6%, 66%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
