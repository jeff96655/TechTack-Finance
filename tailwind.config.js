/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          "100": "#e6fcfa",
          "200": "rgba(230, 252, 250, 0.01)",
        },
        midnightblue: "#091348",
        white: "#fff",
        black: "#000",
        blue: "#0610ff",
        gray: "#0a1132",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inknut-antiqua": "'Inknut Antiqua'",
        mixed: "Mixed",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "6xl": "25px",
      "16xl": "35px",
      mini: "15px",
      sm: "14px",
      lg: "18px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
