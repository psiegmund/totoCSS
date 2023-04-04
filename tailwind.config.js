/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      colors: {
        bgLight: "#fff",
        bgDark: "#000",
        bgPrimary: "#222",
        bgOdds: "#555",
        bgOddsHover: "#999",
        ctaLight: "#FF8000",
        live: "#FF8000",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
};
