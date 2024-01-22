/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#f1f1f1",
          "300": "#eeeff4",
          "400": "#efefef",
        },
        darkslategray: {
          "100": "#365966",
          "200": "#424242",
        },
        gainsboro: {
          "100": "#e4e4e4",
          "200": "rgba(217, 217, 217, 0)",
        },
        cornsilk: "#fff5db",
        gray: {
          "100": "#777779",
          "200": "#75787a",
          "300": "#757575",
          "400": "#022734",
          "500": "rgba(0, 0, 0, 0)",
          "600": "rgba(117, 120, 122, 0.09)",
        },
        darkgray: {
          "100": "#a9abaf",
          "200": "#a8aaae",
          "300": "#9c9c9c",
          "400": "#959595",
        },
        aliceblue: "#f4f9ff",
        white: "#fff",
        darkslateblue: {
          "100": "#2a4176",
          "200": "#294075",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "futura-lt-paneuropean": "'Futura LT Paneuropean'",
        "averta-demo-pe-cutted-demo": "'Averta Demo PE Cutted Demo'",
        "gilroy-bold": "Gilroy-Bold",
        "gilroy-regular": "Gilroy-Regular",
        "gilroy-semibold": "Gilroy-SemiBold",
        "gilroy-light": "Gilroy-Light",
      },
      borderRadius: {
        "81xl": "100px",
        "41xl": "60px",
        lgi: "19px",
        "131xl": "150px",
        "21xl": "40px",
        mid: "17px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1850: {
        raw: "screen and (max-width: 1850px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
