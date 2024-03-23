/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      docuhelpBlue: {
        100: "#1A0AD7",
      },
      docuhelpBorder: {
        100: "#D2CEFD", 
        200: "#E8E7FE"
      },
      docuhelpHeroBg: "#F6F5FF"
    }
  },
};
export const plugins = [];