/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "var(--header)",
        dark: "var(--dark)",
        lightGray: "var(--light-gray)",
        darkMid: "var(--dark-mid)",
        grayMid: "var(--gray-mid)",
        gray: "var(--gray)",
        white: "var(--white)",
        yellow: "var(--yellow)",
      },
      backgroundColor: {
        header: "var(--header)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};
