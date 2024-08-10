/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bleu: '#48759E',  // Exemple de couleur belge
        belge: '#DEBA76'
      },
    },
  },
  variants: {},
  plugins: [],
}
