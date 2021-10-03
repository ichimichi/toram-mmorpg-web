module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts,js}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
