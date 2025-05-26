/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#2D6A4F', // Main primary color
          600: '#065f46',
          700: '#064e3b',
          800: '#022c22',
          900: '#001e18',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#D4A373', // Main secondary color
          400: '#c2938a',
          500: '#b18276',
          600: '#a17066',
          700: '#8b5d54',
          800: '#6d4840',
          900: '#583e37',
        },
        accent: {
          50: '#fcf0f2',
          100: '#fad6db',
          200: '#f5a7b4',
          300: '#f1798c',
          400: '#ed4b64',
          500: '#E63946', // Main accent color
          600: '#cf182a',
          700: '#ad1523',
          800: '#8b121c',
          900: '#6a0e15',
        },
      },
      fontFamily: {
        heading: ['Ubuntu', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};