module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx,jsx}",
    "./app/globals.css",
  ], // <-- ici Tailwind va scanner tous tes fichiers HTML et JS dans app
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
