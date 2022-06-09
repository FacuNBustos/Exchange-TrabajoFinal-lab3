module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '70px 1fr'
      },
      gridTemplateRows: {
        header: '50px 1fr'
      }
    },
    fontFamily : {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}