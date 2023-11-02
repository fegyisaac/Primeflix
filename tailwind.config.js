/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      xsm: "641px",
      md: "768px",
      xmd: "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      'Poppins': ['Poppins', "sans-serif"],
    },
    extend: {
      colors: {
        Dblue: "#1d3c45",
        Primary_10: "hsl(180, 74%, 64%)",
        orenge: "#d2601a",
        tertiary: "#fff1e1",
        tertiary_50: "#f8cb97",
      },
      // gridTemplateColumns: {
      //   // "15": "repeat(5, minmax(1fr, max-content))",
      //   "footer": "350px minmax(180px, 1fr) minmax(180px, 1fr) 1fr",
      // }

    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}