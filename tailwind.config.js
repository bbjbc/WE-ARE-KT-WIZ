/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gonggothic: ['GongGothicMedium', 'GmarketSansMedium'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        slide: 'slide 25s linear infinite',
        reverse: 'slide 25s linear infinite reverse',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
