/** @type {import('prettier').Config} */
const config = {
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 100,
  overrides: [
    {
      files: "*.ts",
      options: {
        semi: true,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;
