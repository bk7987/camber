module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './public/**/*.html'],
    enabled: process.env.NODE_ENV === 'production',
  },
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
