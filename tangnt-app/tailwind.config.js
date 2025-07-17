module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        sidebar: 'var(--color-sidebar)',
        bg: 'var(--color-bg)',
        main: 'var(--color-main)',
        sub: 'var(--color-sub)',
        hover: 'var(--color-hover)',
        divider: 'var(--color-divider)',
      },
    },
  },
  plugins: [],
};
  