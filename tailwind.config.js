module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { },
  },
  plugins: [require("daisyui")],
};
