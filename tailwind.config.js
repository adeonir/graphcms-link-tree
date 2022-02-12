module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#edf1ff',
          100: '#e1e8ff',
          200: '#aec0ff',
          600: '#1f48da',
        },
        gray: {
          550: '#646464',
        },
      },
    },
  },
  plugins: [],
}
