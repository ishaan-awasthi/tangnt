module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
        colors: {
          'light-bg': '#FFFFFF',
          'light-main': '#181818',
          'light-sub': '#6B7280',
          'light-sidebar': '#F8F9FA',
          'light-hover': '#E5E7EB',
          'light-divider': '#000000',
          'dark-bg': '#212121',
          'dark-main': '#FFFFFF',
          'dark-sub': '#CBCBCB',
          'dark-sidebar': '#181818',
          'dark-hover': '#303030',
          'dark-divider': '#181818',
        },
      },
    },
    plugins: [],
  };
    