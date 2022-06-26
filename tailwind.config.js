module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: '70px 1fr',
        card: 'repeat(5, 330px)',
        cardAdmin : '1fr 100px'
      },
      gridTemplateRows: {
        header: '50px 1fr',
        card: 'repeat(2, 250px)'
      }
    },
    fontFamily : {
      'roboto': ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}