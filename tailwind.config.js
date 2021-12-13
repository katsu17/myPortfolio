module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/work.jpg')",
        'fun': "url('/images/fun2.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
