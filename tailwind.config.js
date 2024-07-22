/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#f37321",
        "secondary-gray": "#636363",
        "tertiary-gray": "#8a8a8a",
        "product-green": "#00acb2",
        "product-red": "#b24600",
      },
    },
  },
  plugins: [],
}
