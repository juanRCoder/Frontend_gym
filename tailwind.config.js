/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'oswald': ["Oswald", 'sans-serif']
      },
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
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
