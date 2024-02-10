module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Rajdhani', 'sans-serif'],
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // DARK GRAY
        primary: '#A9A9A9',
        // STONE GRAY
        accent: '#928E85',
      },
      backgroundImage: {
        site: "url('./assets/wave-black.jpg')",
        about: "url('./assets/earth.mp4')",
        services: "url('./assets/bg-site.png')",
      },
    },
  },
  plugins: [],
};
