/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          darker: '#9f1239',
          dark: '#ef4444',
          light: '#fda4af',
          lighter : '#ffe4e6'
        },
      },
      backgroundImage: {
        'hero-pattern': "url('~/public/3.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      ontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
