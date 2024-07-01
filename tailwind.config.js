/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gonggothic: ['GongGothicMedium', 'GmarketSansMedium'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
