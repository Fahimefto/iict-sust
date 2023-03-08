/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('~/public/3.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      ontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
