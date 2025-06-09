module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: "#FFFFFF",
          lightest: "#F2F2F2",
          lighter: "#D8D8D8",
          light: "#B2B2B2",
          DEFAULT: "#7F7F7F", // this is a builtin tailwind prop which allows us to use the base colour without needing a suffix
          dark: "#4C4C4C",
          darker: "#191919",
          darkest: "#000000",
        },
        capecod: {
          lightest: "#EBECEC",
          lighter: "#D7DAD9",
          light: "#757E7C",
          DEFAULT: "#3A4744",
          dark: "#2E3836",
          darker: "#171C1B",
          darkest: "#111514",
        },
      },
      fontFamily: {
        merriweather: ["MerriweatherVariable", "serif"],
        ptsans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
