/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ffp: "Barlow, sans-serif",
        ffs: "Fraunces, serif",
      },
      colors: {
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        lightCyan: "hsl(168 36% 64% )",
        Darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkmoderatecyan: "hsl(168, 34%, 41%)",
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
        btHov: "rgb(110, 209, 255)",
      },
      maxWidth: {
        mxw43: "43ch",
        mxw38: "38ch",
        mxw37: "37ch",
        mxw36: "36ch",
        mxw35: "35ch",
        mxw20: "20ch",
        mxw15: "15ch",
        mxw14: "14ch",
      },
      gridTemplateColumns: {
        gridcols0: "0fr",
      },
      letterSpacing: {
        tracking02: "0.2em",
      },
      translate: {
        translatey18: "4.5rem",
      },
      screens: {
        sm: "768px",
        394: "394px",
      },
    },
  },
  plugins: [],
};
