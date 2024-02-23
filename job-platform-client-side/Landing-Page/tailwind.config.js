/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    extend: {
      colors: {
        'primary': '#FF6363',
        "jobBlue": "#3575E6",
        "darkBlue": "#1E2A47",
        "darkGrayishBlue": 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [],
}

