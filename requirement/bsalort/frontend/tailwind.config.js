module.exports = {
  content: ["./app/**/*.{js,ts,tsx,jsx}"], // <-- ici Tailwind va scanner tous tes fichiers HTML et JS dans app
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        // sans: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
